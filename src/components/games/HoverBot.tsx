import React, { useEffect, useRef, useState } from 'react';
import { useGameLoop } from '../../hooks/useGameLoop';
import { Bot } from 'lucide-react';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 400;
const ROBOT_SIZE = 30;
const OBSTACLE_WIDTH = 50;
const GRAVITY = 0.4;
const JUMP_FORCE = -8;
const OBSTACLE_SPEED = 4;
const POWER_CORE_SIZE = 20;

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

const HoverBot: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameState = useRef({
    robot: {
      x: 100,
      y: GAME_HEIGHT / 2,
      velocity: 0,
      width: ROBOT_SIZE,
      height: ROBOT_SIZE
    },
    obstacles: [] as GameObject[],
    powerCores: [] as GameObject[],
    isPressed: false
  });

  const spawnObstacle = () => {
    const gap = 150;
    const minY = gap;
    const maxY = GAME_HEIGHT - gap;
    const centerY = Math.random() * (maxY - minY) + minY;

    gameState.current.obstacles.push(
      {
        x: GAME_WIDTH,
        y: 0,
        width: OBSTACLE_WIDTH,
        height: centerY - gap / 2
      },
      {
        x: GAME_WIDTH,
        y: centerY + gap / 2,
        width: OBSTACLE_WIDTH,
        height: GAME_HEIGHT - (centerY + gap / 2)
      }
    );

    // Spawn power core in the gap
    if (Math.random() < 0.5) {
      gameState.current.powerCores.push({
        x: GAME_WIDTH + OBSTACLE_WIDTH / 2 - POWER_CORE_SIZE / 2,
        y: centerY - POWER_CORE_SIZE / 2,
        width: POWER_CORE_SIZE,
        height: POWER_CORE_SIZE
      });
    }
  };

  const checkCollision = (rect1: GameObject, rect2: GameObject) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  const update = () => {
    if (!gameStarted || gameOver) return;

    const state = gameState.current;

    // Update robot position
    state.robot.velocity += GRAVITY;
    if (state.isPressed) {
      state.robot.velocity = JUMP_FORCE;
    }
    state.robot.y += state.robot.velocity;

    // Boundary checks
    if (state.robot.y < 0) state.robot.y = 0;
    if (state.robot.y > GAME_HEIGHT - ROBOT_SIZE) {
      state.robot.y = GAME_HEIGHT - ROBOT_SIZE;
      setGameOver(true);
    }

    // Update obstacles
    state.obstacles.forEach(obstacle => {
      obstacle.x -= OBSTACLE_SPEED;
      if (checkCollision(state.robot, obstacle)) {
        setGameOver(true);
      }
    });

    // Update power cores
    state.powerCores.forEach((core, index) => {
      core.x -= OBSTACLE_SPEED;
      if (checkCollision(state.robot, core)) {
        state.powerCores.splice(index, 1);
        setScore(prev => prev + 10);
      }
    });

    // Remove off-screen obstacles and cores
    state.obstacles = state.obstacles.filter(obs => obs.x + obs.width > 0);
    state.powerCores = state.powerCores.filter(core => core.x + core.width > 0);

    // Spawn new obstacles
    if (state.obstacles.length === 0 || 
        state.obstacles[state.obstacles.length - 1].x < GAME_WIDTH - 300) {
      spawnObstacle();
    }

    // Update score
    setScore(prev => prev + 0.1);
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    if (!gameStarted) {
      ctx.fillStyle = '#fff';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Click or Touch to Start', GAME_WIDTH / 2, GAME_HEIGHT / 2);
      return;
    }

    const state = gameState.current;

    // Draw robot
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(state.robot.x, state.robot.y, ROBOT_SIZE, ROBOT_SIZE);

    // Draw obstacles
    ctx.fillStyle = '#ef4444';
    state.obstacles.forEach(obstacle => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // Draw power cores
    ctx.fillStyle = '#22c55e';
    state.powerCores.forEach(core => {
      ctx.beginPath();
      ctx.arc(
        core.x + core.width / 2,
        core.y + core.height / 2,
        core.width / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });

    // Draw score
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${Math.floor(score)}`, 20, 30);
    ctx.fillText(`High Score: ${Math.floor(highScore)}`, 20, 60);

    if (gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      ctx.fillStyle = '#fff';
      ctx.font = '32px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', GAME_WIDTH / 2, GAME_HEIGHT / 2 - 30);
      ctx.font = '24px Arial';
      ctx.fillText(
        `Final Score: ${Math.floor(score)}`,
        GAME_WIDTH / 2,
        GAME_HEIGHT / 2 + 20
      );
    }
  };

  useGameLoop(canvasRef, update, draw);

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
    }
  }, [gameOver, score]);

  const handleStart = () => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (gameOver) {
      setGameOver(false);
      setScore(0);
      gameState.current = {
        robot: {
          x: 100,
          y: GAME_HEIGHT / 2,
          velocity: 0,
          width: ROBOT_SIZE,
          height: ROBOT_SIZE
        },
        obstacles: [],
        powerCores: [],
        isPressed: false
      };
    }
  };

  const handlePointerDown = () => {
    gameState.current.isPressed = true;
    handleStart();
  };

  const handlePointerUp = () => {
    gameState.current.isPressed = false;
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        className="w-full max-w-[800px] bg-gray-900 rounded-lg cursor-pointer touch-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-300 text-lg">
          {!gameStarted ? (
            'Click or touch to start!'
          ) : gameOver ? (
            'Click or touch to try again!'
          ) : (
            'Hold to fly up, release to fall'
          )}
        </p>
        
        <div className="flex items-center gap-2 text-blue-400">
          <Bot className="h-5 w-5" />
          <span>Collect power cores for extra points!</span>
        </div>
      </div>
    </div>
  );
};

export default HoverBot;
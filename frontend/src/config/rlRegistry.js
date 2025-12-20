import GridWorldVisual from '../data/RL/gridWorld/GridVisual';
import GridWorldControls from '../data/RL/gridWorld/GridControls';
import GridWorldExplanation from '../data/RL/gridWorld/GridExplanation';

import BanditExplanation from '../data/RL/bandits/BanditExplanation';
import BanditControls from '../data/RL/bandits/BanditControls';
import BanditVisual from '../data/RL/bandits/BanditVisual';

import QLearningControls from '../data/RL/Q/QControls';
import QLearningExplanation from '../data/RL/Q/QExplanation';
import QLearningVisual from '../data/RL/Q/QVisual';

// Initial state constants
// Shared Grid Data
const INITIAL_GRID = [
  [0, 0, 0, 1],
  [0, 1, 0, 2],
  [0, 0, 0, 0],
  [0, 2, 0, 3],
];

export const RL_REGISTRY = {
  grid_world: {
    visual: GridWorldVisual,
    controls: GridWorldControls,
    explanation: GridWorldExplanation,
    initialParams: {
      grid: INITIAL_GRID,
      agentPos: { r: 0, c: 0 },
      score: 0,
      gameOver: false,
    },
  },
  bandits: {
    visual: BanditVisual,
    controls: BanditControls,
    explanation: BanditExplanation,
    initialParams: {
      arms: [
        { pulls: 0, wins: 0 },
        { pulls: 0, wins: 0 },
        { pulls: 0, wins: 0 },
      ],
      history: [],
      totalReward: 0,
    },
  },
  q_learning: {
    visual: QLearningVisual,
    controls: QLearningControls,
    explanation: QLearningExplanation,
    initialParams: {
      grid: INITIAL_GRID,
      agentPos: { r: 0, c: 0 }, // Robot starts at top-left
      qTable: {}, // Empty brain
      episode: 0,
    },
  },
};

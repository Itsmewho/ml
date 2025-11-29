// TopicData
import mathDefault from '../assets/menu/flask-conical.svg';
import mathActive from '../assets/menu/flask-conicalGreen.svg';

import mlDefault from '../assets/menu/chart-network.svg';
import mlActive from '../assets/menu/chart-networkGreen.svg';

import dlDefault from '../assets/menu/brain.svg';
import dlActive from '../assets/menu/brainGreen.svg';

import rlDefault from '../assets/menu/squirrel.svg';
import rlActive from '../assets/menu/squirrellGreen.svg';

import ulDefault from '../assets/menu/radiation.svg';
import ulActive from '../assets/menu/radiationGreen.svg';

import slDefault from '../assets/menu/microscope.svg';
import slActive from '../assets/menu/microscopeGreen.svg';

export const APP_DATA = {
  math: {
    label: 'Mathematics',
    icons: {
      default: mathDefault,
      active: mathActive,
    },
    topics: [
      {
        id: 'sigmoid', // UID
        label: 'Sigmoid Function',
      },
      {
        id: 'relu',
        label: 'ReLU Activation',
      },
      {
        id: 'dotproduct',
        label: 'Dot Product',
      },
    ],
  },
  ml: {
    label: 'Machine Learning',
    icons: {
      default: mlDefault,
      active: mlActive,
    },
    topics: [
      {
        id: 'linear_reg',
        label: 'Linear Regression',
      },
      {
        id: 'knn',
        label: 'K-Nearest Neighbors',
      },
    ],
  },
  dl: {
    label: 'Deep Learning',
    icons: {
      default: dlDefault,
      active: dlActive,
    },
    topics: [
      {
        id: 'perceptron',
        label: 'Perceptron',
      },
    ],
  },
  rl: {
    label: 'Reinforcement',
    icons: {
      default: rlDefault,
      active: rlActive,
    },
    topics: [
      {
        id: 'rl_intro',
        label: 'RL Introduction',
      },
    ],
  },
  ul: {
    label: 'Unsupervised',
    icons: {
      default: ulDefault,
      active: ulActive,
    },
    topics: [
      {
        id: 'clustering',
        label: 'K-Means Clustering',
      },
    ],
  },
  sl: {
    label: 'Supervised',
    icons: {
      default: slDefault,
      active: slActive,
    },
    topics: [
      {
        id: 'classification',
        label: 'Classification',
      },
    ],
  },
};

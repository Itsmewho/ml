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
        id: 'linear_function',
        label: 'Linear Function',
      },
      {
        id: 'linear_regression',
        label: 'Linear regression',
      },
      {
        id: 'logistic_regression',
        label: 'Logistic regression',
      },
      {
        id: 'normal_distribution',
        label: 'Normal distribution',
      },
      {
        id: 'galton_board',
        label: 'Galton board',
      },
      {
        id: 'sigmoid',
        label: 'Sigmoid Function',
      },
      {
        id: 'relu',
        label: 'ReLU Activation',
      },
      {
        id: 'elu',
        label: 'Exponentially linear units',
      },
      {
        id: 'glu',
        label: 'Gated linear units',
      },
      {
        id: 'swish_activation',
        label: 'Swish Activation',
      },
      {
        id: 'mish_activation',
        label: 'Mish Activation',
      },
      {
        id: 'tanh_activation',
        label: 'Tanh Activation',
      },
      {
        id: 'dot_product',
        label: 'Dot Product',
      },
      {
        id: 'gradient_decent',
        label: 'Gradient decent',
      },
      {
        id: 'mse',
        label: 'Mean squared error',
      },
      {
        id: 'mea',
        label: 'L1 loss',
      },
      {
        id: 'huberloss',
        label: 'Huberloss',
      },
      {
        id: 'binary_cross_entropy_loss',
        label: 'Binary cross',
      },
      {
        id: 'cross_entropy_loss',
        label: 'Cross entropy loss',
      },
      {
        id: 'softmax',
        label: 'Softmax',
      },
      {
        id: 'contrastive_loss',
        label: 'Contrastive loss',
      },
      {
        id: 'hinge_loss',
        label: 'Hinge loss',
      },
      {
        id: 'convolution',
        label: 'Convolution',
      },
      {
        id: 'correlation',
        label: 'Correlation',
      },
      {
        id: 'convolution_vs_correlation',
        label: 'Convolution & Correlation',
      },
      {
        id: 'markov_chain',
        label: 'Markov',
      },
      {
        id: 'claude_shannon',
        label: 'Claude & markov',
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

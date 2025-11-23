// src/data/topicData.js
export const APP_DATA = {
  math: {
    label: 'Mathematics',
    iconClass: 'iconMath', // matches CSS class
    topics: [
      { id: 'sigmoid', label: 'Sigmoid Function' },
      { id: 'relu', label: 'ReLU Activation' },
      { id: 'dotproduct', label: 'Dot Product' },
    ],
  },
  ml: {
    label: 'Machine Learning',
    iconClass: 'iconML',
    topics: [
      { id: 'linear_reg', label: 'Linear Regression' },
      { id: 'knn', label: 'K-Nearest Neighbors' },
    ],
  },
  dl: {
    label: 'Deep Learning',
    iconClass: 'iconDL',
    topics: [{ id: 'perceptron', label: 'Perceptron' }],
  },
};

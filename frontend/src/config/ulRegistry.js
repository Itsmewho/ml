import KMeansControls from '../data/UL/KNeamsControls';
import KMeansVisual from '../data/UL/KNeamsVisual';
import KMeansExplanation from '../data/UL/KNeamsexplanation';

// Initial random data points (3 obvious clusters)
const INITIAL_POINTS = [
  // Cluster 1
  { x: -2, y: 2 },
  { x: -2.2, y: 2.5 },
  { x: -1.8, y: 2.2 },
  { x: -2.5, y: 1.8 },
  // Cluster 2
  { x: 2, y: 2 },
  { x: 2.2, y: 2.5 },
  { x: 1.8, y: 2.2 },
  { x: 2.5, y: 1.8 },
  { x: 2, y: 1.5 },
  // Cluster 3
  { x: 0, y: -2 },
  { x: 0.2, y: -2.5 },
  { x: -0.2, y: -2.2 },
  { x: 0.5, y: -1.8 },
];

export const UL_REGISTRY = {
  kmeans: {
    visual: KMeansVisual,
    controls: KMeansControls,
    explanation: KMeansExplanation,
    initialParams: {
      points: INITIAL_POINTS,
      // Start with bad random centroids to make the visualization fun
      centroids: [
        { x: -3, y: -3 },
        { x: 3, y: -3 },
        { x: 0, y: 0 },
      ],
      assignments: new Array(INITIAL_POINTS.length).fill(-1),
    },
  },
};

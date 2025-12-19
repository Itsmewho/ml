//KMeans
import KMeansControls from '../data/UL/kmeans/KNeamsControls';
import KMeansVisual from '../data/UL/kmeans/KNeamsVisual';
import KMeansExplanation from '../data/UL/kmeans/KNeamsexplanation';

//PCA
import PCAVisual from '../data/UL/pca/PCAVisual';
import PCAControls from '../data/UL/pca/PCAControls';
import PCAExplanation from '../data/UL/pca/PCAExplanation';

//DBSCAN
import DBSVisual from '../data/UL/dbscan/DBSVisual';
import DBSControls from '../data/UL/dbscan/DBSControls';
import DBSExplanation from '../data/UL/dbscan/DBSExplanation';

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

// Data for DBSCAN: A dense line and a separate blob
const DBSCAN_POINTS = [
  // The "Line"
  { x: -3, y: 0 },
  { x: -2.5, y: 0.1 },
  { x: -2, y: -0.1 },
  { x: -1.5, y: 0 },
  { x: -1, y: 0.1 },
  // The "Blob" (far away)
  { x: 2, y: 2 },
  { x: 2.2, y: 2.2 },
  { x: 1.8, y: 1.8 },
  { x: 2.5, y: 2 },
  { x: 2, y: 2.5 },
  // Noise
  { x: 0, y: -3 },
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
  pca: {
    visual: PCAVisual,
    controls: PCAControls,
    explanation: PCAExplanation,
    initialParams: { angle: 0 },
  },
  dbscan: {
    visual: DBSVisual,
    controls: DBSControls,
    explanation: DBSExplanation,
    initialParams: {
      points: DBSCAN_POINTS,
      status: new Array(DBSCAN_POINTS.length).fill(0), // 0=Unvisited
      currentIdx: -1,
      queue: [],
      epsilon: 1.0,
      clusterId: 2, // Start assignment at 2
    },
  },
};

// Import your topic components
import NormalVisual from '../topics/math/normalDistribution/NormalVisual';
import NormalControls from '../topics/math/normalDistribution/NormalControls';

// You can create a default "Not Found" component too
const DefaultVisual = () => <div>Select a topic</div>;
const DefaultControls = () => <div>No controls available</div>;

export const TOPIC_REGISTRY = {
  // Matches the ID in APP_DATA
  normal_dist: {
    visual: NormalVisual,
    controls: NormalControls,
    initialParams: { mean: 0, stdDev: 1 },
  },
  sigmoid: {
    visual: DefaultVisual, // Placeholder until you build it
    controls: DefaultControls,
    initialParams: {},
  },
  // Add new topics here as you build them
};

// 1. Import topics
import NormalVisual from '../data/math/normalDistribution/NormalVisual';
import NormalControls from '../data/math/normalDistribution/NormalControls';

import SigmoidVisual from '../data/math/sigmoid/SigmoidVisual';
import SigmoidControls from '../data/math/sigmoid/SigmoidControls';
import SigmoidExplanation from '../data/math/sigmoid/SigmoidExplanation';

// 2. Import the Placeholders
import {
  DefaultVisual,
  DefaultControls,
  DefaultExplanation,
} from '../components/Defaults/Placeholders';

export const TOPIC_REGISTRY = {
  // --- Active Topics ---
  normal_dist: {
    visual: NormalVisual,
    controls: NormalControls,
    initialParams: { mean: 0, stdDev: 1 },
  },
  sigmoid: {
    visual: SigmoidVisual,
    controls: SigmoidControls,
    explanation: SigmoidExplanation,
    initialParams: { steepness: 1, midpoint: 0 },
  },

  // --- Placeholders / Future Topics ---
  relu: {
    visual: DefaultVisual,
    controls: DefaultControls,
    explanation: DefaultExplanation,
    initialParams: {},
  },
  dotproduct: {
    visual: DefaultVisual,
    controls: DefaultControls,
    explanation: DefaultExplanation,
    initialParams: {},
  },
};

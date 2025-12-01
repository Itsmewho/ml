// 1. Import topics
import NormalVisual from '../data/math/normalDistribution/NormalVisual';
import NormalControls from '../data/math/normalDistribution/NormalControls';

// 2. Import the Placeholders
import {
  DefaultVisual,
  DefaultControls,
  DefaultExplanation,
} from '../components/Defaults/Placeholders';

// LinearFunction
import LinearControls from '../data/math/linearFunction/LinearControls';
import LinearExplanation from '../data/math/linearFunction/LinearExplanation';
import LinearVisual from '../data/math/linearFunction/LinearVisual';

// Sigmoid
import SigmoidVisual from '../data/math/sigmoid/SigmoidVisual';
import SigmoidControls from '../data/math/sigmoid/SigmoidControls';
import SigmoidExplanation from '../data/math/sigmoid/SigmoidExplanation';

// Relu
import ReluControls from '../data/math/relu/ReluControls';
import ReluVisual from '../data/math/relu/ReluVisual';
import ReluExplanation from '../data/math/relu/ReluExplanation';

// ELU
import EluControls from '../data/math/elu/EluControls';
import EluVisual from '../data/math/elu/EluVisual';
import EluExplanation from '../data/math/elu/EluExplanation';

// Tanh
import TanhVisual from '../data/math/tanh/TanhVisual';
import TanhControls from '../data/math/tanh/TanhControls';
import TanhExplanation from '../data/math/tanh/TanhExplanation';

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
  linear_function: {
    visual: LinearVisual,
    controls: LinearControls,
    explanation: LinearExplanation,
    initialParams: { slope: 1, intercept: 0 },
  },
  relu: {
    visual: ReluVisual,
    controls: ReluControls,
    explanation: ReluExplanation,
    initialParams: { leak: 0 },
  },
  tanh_activation: {
    visual: TanhVisual,
    controls: TanhControls,
    explanation: TanhExplanation,
    initialParams: { steepness: 1 },
  },
  elu: {
    visual: EluVisual,
    controls: EluControls,
    explanation: EluExplanation,
    initialParams: { alpha: 1.0 },
  },

  // --- Placeholders / Future Topics ---
  dotproduct: {
    visual: DefaultVisual,
    controls: DefaultControls,
    explanation: DefaultExplanation,
    initialParams: {},
  },
};

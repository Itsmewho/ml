// 1. Import topics
import NormalVisual from '../data/math/normalDistribution/NormalVisual';
import NormalControls from '../data/math/normalDistribution/NormalControls';
import NormalExplanation from '../data/math/normalDistribution/NormalExplanation';

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

//Swish
import SwishControls from '../data/math/swish/SwishControls';
import SwishExplanation from '../data/math/swish/SwishExplanation';
import SwishVisual from '../data/math/swish/SwishVisual';

//Mish
import MishControls from '../data/math/mish/MishControls';
import MishExplanation from '../data/math/mish/MishExplanation';
import MishVisual from '../data/math/mish/MishVisual';

//DotProduct
import DotProductControls from '../data/math/dotproduct/DotProductControls';
import DotProductVisual from '../data/math/dotproduct/DotProductVisual';
import DotProductExplanation from '../data/math/dotproduct/DotProductExplanation';

//LinReg
import LinearRegressionControls from '../data/math/linearFunction/LinearControls';
import LinearRegressionExplanation from '../data/math/linearRegression/LinearRegExpl';
import LinearRegressionVisual from '../data/math/linearRegression/LinearRegVisual';

//logReg
import LogisticControls from '../data/math/logisticRegression/LogRegControls';
import LogisticVisual from '../data/math/logisticRegression/LogRegVisual';
import LogisticExplanation from '../data/math/logisticRegression/LogRegExpl';

//GredientDescent
import GradientDescentControls from '../data/math/gradientDescent/GradientDescentControls';
import GradientDescentExplanation from '../data/math/gradientDescent/GradientDecentExplanation';
import GradientDescentVisual from '../data/math/gradientDescent/GradientDescentVisual';

//Losses
import LossControls from '../data/math/loss/LossControls';
import LossExplanation from '../data/math/loss/LossExplanation';
import LossVisual from '../data/math/loss/LossVisual';

//Softmax
import SoftmaxControls from '../data/math/softmax/SoftmaxControls';
import SoftmaxVisual from '../data/math/softmax/SoftmaxVisual';
import SoftmaxExplanation from '../data/math/softmax/SoftmaxExplanation';

export const TOPIC_REGISTRY = {
  // --- Active Topics ---
  normal_distribution: {
    visual: NormalVisual,
    controls: NormalControls,
    explanation: NormalExplanation,
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
  swish_activation: {
    visual: SwishVisual,
    controls: SwishControls,
    explanation: SwishExplanation,
    initialParams: { beta: 1 },
  },

  mish_activation: {
    visual: MishVisual,
    controls: MishControls,
    explanation: MishExplanation,
    initialParams: {}, // No params for Mish
  },

  dot_product: {
    visual: DotProductVisual,
    controls: DotProductControls,
    explanation: DotProductExplanation,
    initialParams: { x1: 2, y1: 1, x2: 1, y2: 2 },
  },
  linear_regression: {
    visual: LinearRegressionVisual,
    controls: LinearRegressionControls,
    explanation: LinearRegressionExplanation,
    initialParams: { slope: 1, intercept: 0 },
  },
  logistic_regression: {
    visual: LogisticVisual,
    controls: LogisticControls,
    explanation: LogisticExplanation,
    initialParams: { slope: 1, intercept: 0 },
  },
  gradient_descent: {
    visual: GradientDescentVisual,
    controls: GradientDescentControls,
    explanation: GradientDescentExplanation,
    initialParams: { position: 2, learningRate: 0.2 },
  },
  mse: {
    visual: LossVisual,
    controls: LossControls,
    explanation: LossExplanation,
    initialParams: { errorVal: 2, type: 'mse' },
  },
  mae: {
    visual: LossVisual,
    controls: LossControls,
    explanation: LossExplanation,
    initialParams: { errorVal: 2, type: 'mae' },
  },
  huberloss: {
    visual: LossVisual,
    controls: LossControls,
    explanation: LossExplanation,
    initialParams: { errorVal: 2, type: 'huberloss', delta: 1.0 },
  },
  softmax: {
    visual: SoftmaxVisual,
    controls: SoftmaxControls,
    explanation: SoftmaxExplanation,
    initialParams: { val1: 2, val2: 1, val3: 0.5 },
  },
};

import MaxPoolingControls from '../data/DL/maxpooling/MPControls';
import MaxPoolingExplanation from '../data/DL/maxpooling/MPExplanation';
import MaxPoolingVisual from '../data/DL/maxpooling/MPVisual';

//RMM
import RNNControls from '../data/DL/RRN/RNNControls';
import RNNExplanation from '../data/DL/RRN/RNNExplanation';
import RNNVisual from '../data/DL/RRN/RNNVisual';

//PERCEPTRON
import PerceptronVisual from '../data/DL/perceptron/PERVisual';
import PerceptronControls from '../data/DL/perceptron/PERControls';
import PerceptronExplanation from '../data/DL/perceptron/PERExplanation';

// MLP
import MLPVisual from '../data/DL/mlp/MLPVisual';
import MLPControls from '../data/DL/mlp/MLPControls';
import MLPExplanation from '../data/DL/mlp/MLPExplanation';

export const DL_REGISTRY = {
  // ... perceptron, mlp ...

  max_pooling: {
    visual: MaxPoolingVisual,
    controls: MaxPoolingControls,
    explanation: MaxPoolingExplanation,
    // A nice starting pattern
    initialParams: {
      input: [
        1, 3, 2, 4, 8, 2, 1, 0,

        5, 6, 9, 1, 2, 1, 3, 4,
      ],
    },
  },
  rnn: {
    visual: RNNVisual,
    controls: RNNControls,
    explanation: RNNExplanation,
    initialParams: {
      sequence: ['I', 'love', 'this', 'movie'],
      currentStep: 0,
      hiddenStates: [0],
    },
  },
  perceptron: {
    visual: PerceptronVisual,
    controls: PerceptronControls,
    explanation: PerceptronExplanation,
    initialParams: { w1: 1, w2: 1, bias: -1.5 },
  },
  mlp: {
    visual: MLPVisual,
    controls: MLPControls,
    explanation: MLPExplanation,
    initialParams: {
      w1_1: 0.5,
      w1_2: 0.5,
      b1: 0,
      w2_1: 0.5,
      w2_2: 0.5,
      b2: 0,
      wOut1: 1,
      wOut2: 1,
      bOut: -1,
    },
  },
};

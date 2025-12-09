// src/config/mlRegistry.jsx

//LinReg
import LinearRegressionControls from '../data/math/linearFunction/LinearControls';
import LinearRegressionExplanation from '../data/math/linearRegression/LinearRegExpl';
import LinearRegressionVisual from '../data/math/linearRegression/LinearRegVisual';

//Logistic
import LogisticControls from '../data/math/logisticRegression/LogRegControls';
import LogisticExplanation from '../data/math/logisticRegression/LogRegExpl';
import LogisticVisual from '../data/math/logisticRegression/LogRegVisual';

export const ML_REGISTRY = {
  linear_reg: {
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
};

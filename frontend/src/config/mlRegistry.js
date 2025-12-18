// src/config/mlRegistry.jsx

//LinReg
import LinearRegressionControls from '../data/math/linearFunction/LinearControls';
import LinearRegressionExplanation from '../data/math/linearRegression/LinearRegExpl';
import LinearRegressionVisual from '../data/math/linearRegression/LinearRegVisual';

//Logistic
import LogisticControls from '../data/math/logisticRegression/LogRegControls';
import LogisticExplanation from '../data/math/logisticRegression/LogRegExpl';
import LogisticVisual from '../data/math/logisticRegression/LogRegVisual';

//KKN
import KNNControls from '../data/ML/kkn/KNNControls';
import KNNExplanation from '../data/ML/kkn/KKNExplanation';
import KNNVisual from '../data/ML/kkn/KKNVisual';

//SVM
import SVMControls from '../data/ML/svm/SVMControls';
import SVMExplanation from '../data/ML/svm/SVMExplanation';
import SVMVisual from '../data/ML/svm/SVMVisual';

//DT
import DecisionTreeControls from '../data/ML/dicisionTree/DTControls';
import DecisionTreeExplanation from '../data/ML/dicisionTree/DTexplanation';
import DecisionTreeVisual from '../data/ML/dicisionTree/DTVisual';

//RForest
import RandomForestControls from '../data/ML/randomForest/RFControls';
import RandomForestExplanation from '../data/ML/randomForest/RFexplanation';
import RandomForestVisual from '../data/ML/randomForest/RFVisual';

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
  knn: {
    visual: KNNVisual,
    controls: KNNControls,
    explanation: KNNExplanation,
    initialParams: { x: 0, y: 0, k: 3 },
  },
  svm: {
    visual: SVMVisual,
    controls: SVMControls,
    explanation: SVMExplanation,
    initialParams: { angle: -45, intercept: 0, margin: 0.5 },
  },
  decision_tree: {
    visual: DecisionTreeVisual,
    controls: DecisionTreeControls,
    explanation: DecisionTreeExplanation,
    initialParams: { splitX: 0, splitYLeft: 0, splitYRight: 0 },
  },
  random_forest: {
    visual: RandomForestVisual,
    controls: RandomForestControls,
    explanation: RandomForestExplanation,
    // Start with just 1 tree active to show how bad it is alone
    initialParams: { showTree1: true, showTree2: false, showTree3: false },
  },
};

const SigmoidExplanation = () => {
  return (
    <div className="explanation-content">
      <h2 className="ff-serif fs-400 upper lineheight">Sigmoid Function</h2>
      <p className="ff-sans fs-300 grey margintop">
        The sigmoid function (often called the logistic function) is a fundamental
        mathematical function in machine learning, particularly used for binary
        classification tasks (problems with two possible answers, like Yes/No or Spam/Not
        Spam). Its main job is to take any input number (no matter how large or small) and
        squash it into a value between 0 and 1.
      </p>
      <h3 className="ff-serif fs-400 lineheight">Why is it used?</h3>
      <p className="ff-sans fs-300 grey margintop">
        It not only converts numbers into probabilities in ML, a model often calculates a
        `&apos`raw score`&apos`(called a logit) that can range from minus infiniti to plus
        inf. This isnt usefull for making a decision. The sigmoid function converts that
        raw score into a range of 0 to 1, with can be inerpret as a propability.
      </p>
      <ul className="ff-sans fs-300 grey">
        <li>&#8226; Input 0: returns 0.5 (50% propability)</li>
        <li>
          &#8226; Large positive input (eg 10): returns close to 1.0 (high confidence so
          YES)
        </li>
        <li>
          &#8226; Large negative input (eg -10): reutrn close to 0 (low confidence so NO)
        </li>
      </ul>
      <h4 className="ff-serif fs-400 lineheight">Vanishing Gradient Problem</h4>
      <p className="ff-sans fs-300 grey margintop">
        While Sigmoid is great for the final output layer of a binary classifier, it is
        rarely used in the hidden layers of deep neural networks anymore. This is because
        of the Vanishing Gradient Problem.
      </p>
      <ul className="ff-sans fs-300 grey">
        <li>
          &#8226; At the extreme ends of the S-curve (very high or very low numbers), the
          curve becomes almost flat.
        </li>
        <li>&#8226; Because it is flat, the slope (gradient) is nearly zero.</li>
        <li>
          &#8226; During training (backpropagation), if the gradient is zero, the network
          stops learning because it doesnt know which direction to adjust the weights
        </li>
        <li>
          &#8226; Modern solution: Most hidden layers now use ReLU (Rectified Linear Unit)
          instead, which doesnt suffer from this issue as severely
        </li>
      </ul>

      <div
        style={{
          margin: '1rem 0',
          padding: '10px',
          background: '',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        <h5>The formula</h5>
        f(x) = 1 / (1 + e
        <sup>
          -k(x - x<sub>0</sub>)
        </sup>
        )
      </div>
    </div>
  );
};

export default SigmoidExplanation;

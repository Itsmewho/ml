const MLPExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Multi-Layer Perceptron (MLP)</h3>
      <p className="ff-sans fs-300 grey margintop">
        Also known as a <strong>Neural Network</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        The Perceptron failed because it could only draw lines. The MLP fixes this by
        adding <strong>Hidden Layers</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Think of the Hidden Layer as folding the paper. If you have Red and Blue dots
        mixed up on a sheet of paper, you can fold the paper so that all the Reds touch.
        Then you can cut them out with a single scissor snip (the final line).
      </p>
    </div>
  );
};

export default MLPExplanation;

const PerceptronExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">The Perceptron</h3>
      <p className="ff-sans fs-300 grey margintop">
        The Atom of Deep Learning. It is the simplest possible Neural Network.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It takes inputs, weighs them, and if the total is high enough (past the bias
        threshold), it fires.
      </p>
      <div
        style={{
          margin: '1rem 0',
          textAlign: 'center',
          fontFamily: 'monospace',
          fontSize: '1rem',
          background: 'rgba(255,255,255,0.05)',
          padding: '10px',
          borderRadius: '4px',
        }}
      >
        Score = (x1 * w1) + (x2 * w2) + bias
      </div>
      <p className="ff-sans fs-300 grey margintop">
        <strong>The Limitation:</strong> It can only draw straight lines. It cannot solve
        complex problems like XOR (where opposite corners match).
      </p>
    </div>
  );
};

export default PerceptronExplanation;

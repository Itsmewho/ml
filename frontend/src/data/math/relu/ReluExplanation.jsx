const ReluExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">ReLU (Rectified Linear Unit)</h3>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Standard ReLU</strong> ignores all negative inputs (outputs 0). This can
        lead to the <em>Dead Neuron Problem</em> where a neuron never activates and stops
        learning.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Leaky/Parametric ReLU</strong> fixes this by allowing a small gradient
        (slope) when x is negative, keeping the neuron alive.
      </p>

      <div
        style={{
          margin: '1rem 0',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        f(x) = max(<span> &alpha;</span>x, x )
      </div>
    </div>
  );
};

export default ReluExplanation;

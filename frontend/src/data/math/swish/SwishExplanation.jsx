const SwishExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Swish Activation</h3>
      <p className="ff-sans fs-300 grey margintop">
        Discovered by Google Brain. It is a <strong>Self-Gated</strong> activation
        function.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Notice the little dip below zero on the left side? That dip improves gradient flow
        in very deep networks compared to ReLU.
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
        f(x) = x &middot; sigmoid(&beta;x)
      </div>
    </div>
  );
};

export default SwishExplanation;

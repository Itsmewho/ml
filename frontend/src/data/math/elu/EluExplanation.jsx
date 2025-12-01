const EluExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">ELU Activation</h3>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Exponential Linear Unit.</strong>
        <br />
        Unlike ReLU, ELU can produce negative outputs. This helps push the &apos;mean
        activation&apos; of neurons closer to zero, which speeds up learning.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It is also <strong>smooth</strong> (differentiable) everywhere, unlike ReLU which
        has a sharp corner at 0.
      </p>

      <div
        style={{
          margin: '1rem 0',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '1.3rem',
          textAlign: 'center',
        }}
      >
        f(x) = &alpha;(e<sup>x</sup> - 1)
        <span style={{ fontSize: '0.8rem', color: '#888', display: 'block' }}>
          (for x &le; 0)
        </span>
      </div>
    </div>
  );
};

export default EluExplanation;

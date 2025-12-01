const TanhExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Tanh Activation</h3>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Hyperbolic Tangent.</strong> It is very similar to Sigmoid, but it is{' '}
        <strong>Zero-Centered</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Because the output ranges from <strong>-1 to 1</strong>, the average of the data
        stays closer to 0, which makes training multi-layer neural networks easier and
        faster than Sigmoid.
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
        f(x) = tanh(x) = <br />
        <span>
          (e<sup>x</sup> - e<sup>-x</sup>) / (e<sup>x</sup> + e<sup>-x</sup>)
        </span>
      </div>
    </div>
  );
};

export default TanhExplanation;

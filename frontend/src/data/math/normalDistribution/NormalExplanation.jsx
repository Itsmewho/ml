const NormalExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Normal Distribution</h3>
      <p className="ff-sans fs-300 grey margintop">
        Also known as the <strong>Gaussian Distribution</strong> or Bell Curve.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        In AI, we assume most data is distributed this way. When we create a Neural
        Network, we usually initialize the random weights using this curve ($\mu=0,
        \sigma=1$) to make sure the network starts in a stable state.
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
        f(x) = (1 / &sigma;&radic;2&pi;) * e<sup>-0.5((x-&mu;)/&sigma;)&sup2;</sup>
      </div>
    </div>
  );
};

export default NormalExplanation;

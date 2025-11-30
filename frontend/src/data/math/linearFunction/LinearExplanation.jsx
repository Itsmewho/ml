const LinearExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Linear Function</h3>
      <p className="ff-sans fs-300 grey margintop">
        The foundation of all Neural Networks.
        <br />
        &#8226; <strong>&apos;a&apos; (Slope)</strong> represents the <em>Weight</em>{' '}
        (importance).
        <br />
        &#8226; <strong>&apos;b&apos; (Intercept)</strong> represents the <em>Bias</em>{' '}
        (activation threshold).
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
        f(x) = <span>a</span>x + <span>b</span>
      </div>
    </div>
  );
};

export default LinearExplanation;

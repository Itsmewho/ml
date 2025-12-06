const GradientDescentExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Gradient Descent</h3>
      <p className="ff-sans fs-300 grey margintop">
        The algorithm used to train almost all Neural Networks.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Imagine being on a mountain (the Loss Curve) in the fog. To get to the bottom, you
        check the slope of the ground (<strong>Gradient</strong>) and take a step in the
        opposite direction.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        The <strong>Learning Rate</strong> determines how big of a step you take. Too
        small = slow training. Too big = overshooting the target.
      </p>

      {/* Styled per request: No background, no font-family, 1.3rem size */}
      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        New = Old - (Learning_Rate &times; Gradient)
      </div>
    </div>
  );
};

export default GradientDescentExplanation;

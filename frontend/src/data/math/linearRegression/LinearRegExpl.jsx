const LinearRegressionExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Linear Regression</h3>
      <p className="ff-sans fs-300 grey margintop">The task of fitting a line to data.</p>
      <p className="ff-sans fs-300 grey margintop">
        The <strong>Red Dashed Lines</strong> are the <em>Residuals</em> (Errors). The
        machine learns by calculating the square of these red lines (MSE) and trying to
        find the specific slope and intercept that makes the total error as small as
        possible.
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
        Loss = &sum; (y<sub>real</sub> - y<sub>pred</sub>)<sup>2</sup>
      </div>
    </div>
  );
};

export default LinearRegressionExplanation;

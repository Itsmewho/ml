const LogisticExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Logistic Regression</h3>
      <p className="ff-sans fs-300 grey margintop">
        Used for <strong>Classification</strong> (Yes/No questions).
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Instead of fitting a straight line, we fit an <strong>S-Curve</strong> (Sigmoid).
        The curve tells us the <em>Probability</em> that a data point belongs to Class 1.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        The <strong>Decision Boundary</strong> is where the probability crosses 50%.
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
        P(y=1) = &sigma;(wx + b)
      </div>
    </div>
  );
};

export default LogisticExplanation;

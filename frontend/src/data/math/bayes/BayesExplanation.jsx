const BayesExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Bayes Theorem</h3>
      <p className="ff-sans fs-300 grey margintop">
        How we update our beliefs based on new evidence.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>The Counter-Intuitive Truth:</strong>
        <br />
        If a disease is very rare (1%), even a 99% Accurate test is often wrong.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Look at the graph: The <strong>Orange Box</strong> (False Positives) is often
        bigger than the <strong>Green Box</strong> (True Positives) simply because there
        are so many more Healthy people to begin with!
      </p>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.1rem',
        }}
      >
        P(A|B) = P(B|A) &middot; P(A) / P(B)
      </div>
    </div>
  );
};

export default BayesExplanation;

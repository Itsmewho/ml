const HingeExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Hinge Loss</h3>
      <p className="ff-sans fs-300 grey margintop">
        The loss function powering <strong>Support Vector Machines (SVMs)</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It doesnt care about probability. It cares about the <strong>Margin</strong>.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          If you predict the correct class with a score &gt; 1, the loss is{' '}
          <strong>Zero</strong>. The model stops worrying.
        </li>
        <li>
          If you are correct but weak (e.g., score 0.5), you still get a small penalty. It
          forces you to be <strong>Confidently Correct</strong>.
        </li>
        <li>If you are wrong (negative score), the penalty grows linearly.</li>
      </ul>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        Loss = max(0, 1 - t&middot;y)
      </div>
    </div>
  );
};

export default HingeExplanation;

const CrossEntropyExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Cross Entropy Loss</h3>
      <p className="ff-sans fs-300 grey margintop">
        The cost function used for Classification.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        The curve shows the penalty if the Truth is <strong>Yes</strong> (1), but you
        predicted something else.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          If you predict <strong>1.0 (100%)</strong>: Loss is 0. Perfect.
        </li>
        <li>
          If you predict <strong>0.5 (50%)</strong>: Loss is ~0.69. Uncertain.
        </li>
        <li>
          If you predict <strong>0.0 (0%)</strong>: Loss is <strong>Infinity</strong>.
        </li>
      </ul>
      <p className="ff-sans fs-300 grey margintop">
        This massive penalty for being wrong forces the model to learn very quickly.
      </p>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        Loss = -ln(p)
      </div>
    </div>
  );
};

export default CrossEntropyExplanation;

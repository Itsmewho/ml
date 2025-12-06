const BCEExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Binary Cross Entropy</h3>
      <p className="ff-sans fs-300 grey margintop">
        The standard loss for <strong>Sigmoid</strong> outputs (Yes/No tasks).
      </p>
      <p className="ff-sans fs-300 grey margintop">The formula is a clever switch:</p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          If <strong>y=1</strong>, the second part becomes 0, leaving just{' '}
          <strong>-log(p)</strong> (Red curve).
        </li>
        <li>
          If <strong>y=0</strong>, the first part becomes 0, leaving just{' '}
          <strong>-log(1-p)</strong> (Blue curve).
        </li>
      </ul>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
          lineHeight: '1.6',
        }}
      >
        Loss = -[ y&middot;log(p) + (1-y)&middot;log(1-p) ]
      </div>
    </div>
  );
};

export default BCEExplanation;

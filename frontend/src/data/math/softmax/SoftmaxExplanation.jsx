const SoftmaxExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Softmax Function</h3>
      <p className="ff-sans fs-300 grey margintop">
        The standard final layer for <strong>Multi-Class Classification</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It takes a list of raw scores (logits), which can be negative or positive, and
        compresses them into a list of <strong>Probabilities</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Critically, the sum of all outputs is always exactly <strong>1.0 (100%)</strong>.
        This forces the model to &apos;pick a winner.&apos;
      </p>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        &sigma;(z)<sub>i</sub> = e
        <sup>
          z<sub>i</sub>
        </sup>{' '}
        / &Sigma; e
        <sup>
          z<sub>j</sub>
        </sup>
      </div>
    </div>
  );
};

export default SoftmaxExplanation;

const RNNExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Recurrent Neural Network (RNN)</h3>
      <p className="ff-sans fs-300 grey margintop">
        The network with <strong>Short-Term Memory</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Standard networks (like CNNs) look at an image once and forget it. RNNs loop their
        output back into themselves. This allows them to read text like a human:
        understanding the context of the previous words.
      </p>
      <div
        style={{
          marginTop: '1rem',
          borderLeft: '3px solid var(--clr-primary)',
          paddingLeft: '10px',
        }}
      >
        <p className="ff-sans fs-300 grey">
          <strong>
            h<sub>t</sub> = Tanh( W&middot;x<sub>t</sub> + U&middot;h<sub>t-1</sub> )
          </strong>
          <br />
          Current State = Current Input + Previous Memory
        </p>
      </div>
    </div>
  );
};

export default RNNExplanation;

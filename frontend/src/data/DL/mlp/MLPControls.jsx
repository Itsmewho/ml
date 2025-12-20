import PropTypes from 'prop-types';

const MLPControls = ({ setParams }) => {
  // Weights that act like logical gates (NAND, OR, AND) to solve XOR
  const solveXOR = () => {
    setParams({
      w1_1: 20,
      w1_2: 20,
      b1: -10, // Neuron 1 (OR-ish)
      w2_1: -20,
      w2_2: -20,
      b2: 30, // Neuron 2 (NAND-ish)
      wOut1: 20,
      wOut2: 20,
      bOut: -30, // Output (AND)
    });
  };

  const reset = () => {
    setParams({
      w1_1: 0.5,
      w1_2: 0.5,
      b1: 0,
      w2_1: 0.5,
      w2_2: 0.5,
      b2: 0,
      wOut1: 1,
      wOut2: 1,
      bOut: -1,
    });
  };

  return (
    <div className="controls-content">
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <button
          onClick={solveXOR}
          style={{
            padding: '10px 20px',
            background: 'var(--clr-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Train Network (Solve XOR)
        </button>

        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '1px solid #666',
            color: '#888',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Reset Weights
        </button>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
        <strong>Watch the Right Graph:</strong>
        <br />
        When you click Train, the network learns to push the Red dots to one side and Blue
        dots to the other in Hidden Space, allowing a simple line to separate them.
      </p>
    </div>
  );
};

MLPControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default MLPControls;

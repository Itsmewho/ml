import PropTypes from 'prop-types';

const CorrelationControls = ({ params, setParams }) => {
  const maxStep = params.input.length - params.kernel.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Slide Position: {params.step}</label>
        <input
          type="range"
          name="step"
          min="0"
          max={maxStep}
          step="1"
          value={params.step}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setParams({ input: [1, 0, 5, 0, 1, 0], kernel: [5], step: 0 })}
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #666',
            borderRadius: '4px',
          }}
        >
          Find the 5
        </button>
        <button
          onClick={() =>
            setParams({ input: [1, 2, 3, 2, 1, 0], kernel: [1, 2, 3], step: 0 })
          }
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #666',
            borderRadius: '4px',
          }}
        >
          Find Pattern 1-2-3
        </button>
      </div>
    </div>
  );
};

CorrelationControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default CorrelationControls;

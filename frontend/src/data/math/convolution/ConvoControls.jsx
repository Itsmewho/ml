import PropTypes from 'prop-types';

const ConvolutionControls = ({ params, setParams }) => {
  // Max steps = Input Length - Kernel Length
  const maxStep = params.input.length - params.kernel.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Step Slider */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Sliding Window Position: {params.step}</label>
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
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Drag to slide the Kernel across the Input.
        </p>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      {/* Preset Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() =>
            setParams({ input: [0, 0, 1, 1, 0, 0], kernel: [-1, 1], step: 0 })
          }
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #666',
            borderRadius: '4px',
          }}
        >
          Edge Detect
        </button>
        <button
          onClick={() =>
            setParams({ input: [1, 3, 5, 3, 1, 0], kernel: [0.3, 0.3, 0.3], step: 0 })
          }
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #666',
            borderRadius: '4px',
          }}
        >
          Smoothing
        </button>
      </div>
    </div>
  );
};

ConvolutionControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default ConvolutionControls;

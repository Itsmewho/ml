import PropTypes from 'prop-types';

const GradientDescentControls = ({ params, setParams }) => {
  // Calculate Gradient just for display
  const gradient = 2 * params.position;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Info Display */}
      <div
        style={{
          marginBottom: '1rem',
          padding: '10px',
          border: '1px solid var(--clr-bordercolor)',
          borderRadius: '5px',
          fontSize: '0.9rem',
        }}
      >
        <p style={{ margin: '2px 0' }}>
          Current Gradient: <strong>{gradient.toFixed(2)}</strong>
        </p>
        <p style={{ margin: '2px 0' }}>
          Direction: <strong>{gradient > 0 ? 'Go Left' : 'Go Right'}</strong>
        </p>
      </div>

      {/* Position Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Current Position (Weight): {params.position}</label>
        <input
          type="range"
          name="position"
          min="-2.5"
          max="2.5"
          step="0.1"
          value={params.position}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Learning Rate Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Learning Rate: {params.learningRate}</label>
        <input
          type="range"
          name="learningRate"
          min="0.1"
          max="1.2"
          step="0.1"
          value={params.learningRate}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          <strong>Green Dot</strong> is the next step.
          <br />
          Warning: If rate is too high, you might overshoot!
        </p>
      </div>
    </div>
  );
};

GradientDescentControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default GradientDescentControls;

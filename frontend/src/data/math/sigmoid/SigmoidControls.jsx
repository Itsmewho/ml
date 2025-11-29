import PropTypes from 'prop-types';
const SigmoidControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Sliders Only */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Steepness (k): {params.steepness}</label>
        <input
          type="range"
          name="steepness"
          min="0.1"
          max="5"
          step="0.1"
          value={params.steepness}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Midpoint (x<sub>0</sub>): {params.midpoint}
        </label>
        <input
          type="range"
          name="midpoint"
          min="-5"
          max="5"
          step="0.1"
          value={params.midpoint}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

SigmoidControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default SigmoidControls;

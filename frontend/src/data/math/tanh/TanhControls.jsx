import PropTypes from 'prop-types';

const TanhControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
        Notice the Y-axis goes from <strong>-1 to 1</strong>. <br />
        (Sigmoid only went from 0 to 1).
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <label>Steepness (k): {params.steepness}</label>
        <input
          type="range"
          name="steepness"
          min="-5"
          max="5"
          step="0.1"
          value={params.steepness}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

TanhControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default TanhControls;

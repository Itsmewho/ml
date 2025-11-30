import PropTypes from 'prop-types';

const LinearControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Slope (a) Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Slope (a): {params.slope}</label>
        <input
          type="range"
          name="slope"
          min="-5"
          max="5"
          step="0.1"
          value={params.slope}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Intercept (b) Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Intercept (b): {params.intercept}</label>
        <input
          type="range"
          name="intercept"
          min="-5"
          max="5"
          step="0.1"
          value={params.intercept}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

LinearControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default LinearControls;

import PropTypes from 'prop-types';

const SVMControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label>Rotation (Angle): {params.angle}°</label>
        <input
          type="range"
          name="angle"
          min="-80"
          max="80"
          step="1"
          value={params.angle}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Shift (Bias): {params.intercept}</label>
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

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#a855f7', fontWeight: 'bold' }}>
          Margin Width: {params.margin}
        </label>
        <input
          type="range"
          name="margin"
          min="0.1"
          max="3"
          step="0.1"
          value={params.margin}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Goal: Maximize this Width without hitting any dots!
        </p>
      </div>
    </div>
  );
};

SVMControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default SVMControls;

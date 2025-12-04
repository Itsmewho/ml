import PropTypes from 'prop-types';

const NormalControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label>Mean (mu): {params.mean}</label>
        <input
          type="range"
          name="mean"
          min="-3"
          max="3"
          step="0.1"
          value={params.mean}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: 0 }}>
          Shifts the center left or right.
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Standard Deviation (sigma): {params.stdDev}</label>
        <input
          type="range"
          name="stdDev"
          min="0.2"
          max="2.0"
          step="0.1"
          value={params.stdDev}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: 0 }}>
          Controls the width (spread). Lower = Sharper peak.
        </p>
      </div>
    </div>
  );
};

NormalControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default NormalControls;

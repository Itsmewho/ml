import PropTypes from 'prop-types';

const EulerControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Step Size (h): {params.stepSize}</label>
        <input
          type="range"
          name="stepSize"
          min="0.1"
          max="1.5"
          step="0.1"
          value={params.stepSize}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Small Step = Accurate but slow.
          <br />
          Large Step = Fast but inaccurate (drifts away).
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Number of Steps: {params.steps}</label>
        <input
          type="range"
          name="steps"
          min="1"
          max="20"
          step="1"
          value={params.steps}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

EulerControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default EulerControls;

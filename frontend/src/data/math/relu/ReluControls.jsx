import PropTypes from 'prop-types';

const ReluControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Explanation of the modes */}
      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
        <p style={{ margin: '4px 0' }}>
          <strong>ReLU:</strong> Set Leak = 0
        </p>
        <p style={{ margin: '4px 0' }}>
          <strong>Leaky ReLU:</strong> Set Leak = 0.01
        </p>
        <p style={{ margin: '4px 0' }}>
          <strong>PReLU:</strong> Move the slider (You are the parameter!)
        </p>
      </div>

      {/* The Alpha / Leak Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Alpha / Leak : {params.leak}</label>
        <input
          type="range"
          name="leak"
          min="-1"
          max="1"
          step="0.01"
          value={params.leak}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

ReluControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default ReluControls;

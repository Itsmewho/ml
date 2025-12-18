import PropTypes from 'prop-types';

const KNNControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* K Slider */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>K (Neighbors): {params.k}</label>
        <input
          type="range"
          name="k"
          min="1"
          max="9" // Max is total data points
          step="2" // Usually odd numbers to avoid ties
          value={params.k}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Low K = Noisy (Overfitting). High K = Smooth (Underfitting).
        </p>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      <h4 style={{ margin: '0 0 10px 0' }}>Move Query Point</h4>

      <div style={{ marginBottom: '1rem' }}>
        <label>X Position: {params.x}</label>
        <input
          type="range"
          name="x"
          min="-3"
          max="3"
          step="0.1"
          value={params.x}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Y Position: {params.y}</label>
        <input
          type="range"
          name="y"
          min="-2"
          max="3"
          step="0.1"
          value={params.y}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

KNNControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default KNNControls;

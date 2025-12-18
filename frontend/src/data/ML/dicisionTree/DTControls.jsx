import PropTypes from 'prop-types';

const DecisionTreeControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
        Adjust the Cuts to separate the Red and Blue dots into their own boxes.
      </p>

      {/* Root Node Control */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>1. Root Split (X-Axis): {params.splitX}</label>
        <input
          type="range"
          name="splitX"
          min="-4"
          max="4"
          step="0.5"
          value={params.splitX}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <div style={{ fontSize: '0.8rem', color: '#888' }}>Separates Left vs Right</div>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      {/* Left Child Control */}
      <div style={{ marginBottom: '1rem' }}>
        <label>2. Left Branch Split (Y-Axis): {params.splitYLeft}</label>
        <input
          type="range"
          name="splitYLeft"
          min="-4"
          max="4"
          step="0.5"
          value={params.splitYLeft}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Right Child Control */}
      <div style={{ marginBottom: '1rem' }}>
        <label>3. Right Branch Split (Y-Axis): {params.splitYRight}</label>
        <input
          type="range"
          name="splitYRight"
          min="-4"
          max="4"
          step="0.5"
          value={params.splitYRight}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

DecisionTreeControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default DecisionTreeControls;

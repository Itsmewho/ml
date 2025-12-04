import PropTypes from 'prop-types';

const DotProductControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Vector A Controls */}
      <h4 style={{ margin: '0 0 10px 0', color: '#3b82f6' }}>Vector A (Blue)</h4>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label>X: {params.x1}</label>
          <input
            type="range"
            name="x1"
            min="-3"
            max="3"
            step="0.1"
            value={params.x1}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Y: {params.y1}</label>
          <input
            type="range"
            name="y1"
            min="-3"
            max="3"
            step="0.1"
            value={params.y1}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.2, margin: '1rem 0' }} />

      {/* Vector B Controls */}
      <h4 style={{ margin: '0 0 10px 0', color: '#ef4444' }}>Vector B (Red)</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <label>X: {params.x2}</label>
          <input
            type="range"
            name="x2"
            min="-3"
            max="3"
            step="0.1"
            value={params.x2}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Y: {params.y2}</label>
          <input
            type="range"
            name="y2"
            min="-3"
            max="3"
            step="0.1"
            value={params.y2}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

DotProductControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default DotProductControls;

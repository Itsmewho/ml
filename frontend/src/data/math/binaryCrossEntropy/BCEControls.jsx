import PropTypes from 'prop-types';

const BCEControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* 1. Truth Toggle */}
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>True Label (y)</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setParams((prev) => ({ ...prev, truth: 1 }))}
            style={{
              padding: '8px 20px',
              border: '2px solid #ef4444',
              background: params.truth === 1 ? '#ef4444' : 'transparent',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            1 (Yes)
          </button>
          <button
            type="button"
            onClick={() => setParams((prev) => ({ ...prev, truth: 0 }))}
            style={{
              padding: '8px 20px',
              border: '2px solid #3b82f6',
              background: params.truth === 0 ? '#3b82f6' : 'transparent',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            0 (No)
          </button>
        </div>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      {/* 2. Prediction Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Prediction (p): {params.pred}</label>
        <input
          type="range"
          name="pred"
          min="0.01"
          max="0.99"
          step="0.01"
          value={params.pred}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Move this towards the True Label to decrease Loss.
        </p>
      </div>
    </div>
  );
};

BCEControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default BCEControls;

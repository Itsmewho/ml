import PropTypes from 'prop-types';

const HingeControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Truth Toggle (-1 vs 1) */}
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>True Class (Target)</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setParams((prev) => ({ ...prev, truth: 1 }))}
            style={{
              padding: '8px 20px',
              border: '2px solid #3b82f6',
              background: params.truth === 1 ? '#3b82f6' : 'transparent',
              color: params.truth === 1 ? 'white' : '#3b82f6',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            +1 (Positive)
          </button>
          <button
            type="button"
            onClick={() => setParams((prev) => ({ ...prev, truth: -1 }))}
            style={{
              padding: '8px 20px',
              border: '2px solid #ef4444',
              background: params.truth === -1 ? '#ef4444' : 'transparent',
              color: params.truth === -1 ? 'white' : '#ef4444',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            -1 (Negative)
          </button>
        </div>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      {/* Raw Score Slider */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Raw Score / Prediction: {params.pred}</label>
        <input
          type="range"
          name="pred"
          min="-3"
          max="3"
          step="0.1"
          value={params.pred}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Unlike Sigmoid, this score is not capped between 0 and 1.
        </p>
      </div>
    </div>
  );
};

HingeControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default HingeControls;

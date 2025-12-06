import PropTypes from 'prop-types';

const LossControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Universal Slider: The Input Error */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Input Error (x): {params.errorVal}</label>
        <input
          type="range"
          name="errorVal"
          min="-3"
          max="3"
          step="0.1"
          value={params.errorVal}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Special Control for Huber Loss */}
      {params.type === 'huberloss' && (
        <div
          style={{
            marginBottom: '1rem',
            borderTop: '1px solid #444',
            paddingTop: '10px',
          }}
        >
          <label>Delta (&delta;): {params.delta}</label>
          <input
            type="range"
            name="delta"
            min="0.1"
            max="3"
            step="0.1"
            value={params.delta}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          <p style={{ fontSize: '0.8rem', color: '#888' }}>
            The point where it switches from Squared to Linear.
          </p>
        </div>
      )}
    </div>
  );
};

LossControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default LossControls;

import PropTypes from 'prop-types';

const SoftmaxControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#888' }}>
        Adjust the raw <strong>Logits</strong> (Scores). Notice how increasing one bar
        forces the others to shrink!
      </p>

      {/* Slider 1: Cat */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#ef4444' }}>Cat Score: {params.val1}</label>
        <input
          type="range"
          name="val1"
          min="-3"
          max="5"
          step="0.1"
          value={params.val1}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Slider 2: Dog */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#22c55e' }}>Dog Score: {params.val2}</label>
        <input
          type="range"
          name="val2"
          min="-3"
          max="5"
          step="0.1"
          value={params.val2}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Slider 3: Bird */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#3b82f6' }}>Bird Score: {params.val3}</label>
        <input
          type="range"
          name="val3"
          min="-3"
          max="5"
          step="0.1"
          value={params.val3}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

SoftmaxControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default SoftmaxControls;

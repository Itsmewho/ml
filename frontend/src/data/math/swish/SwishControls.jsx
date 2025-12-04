import PropTypes from 'prop-types';

const SwishControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label>Beta: {params.beta}</label>
        <input
          type="range"
          name="beta"
          min="0"
          max="10"
          step="0.1"
          value={params.beta}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          <strong>Tip:</strong> Set beta=10 -{'>'} Looks like ReLU.
          <br />
          Set beta=0 -{'>'} Looks Linear.
        </p>
      </div>
    </div>
  );
};

SwishControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default SwishControls;

import PropTypes from 'prop-types';

const EluControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label>Alpha: {params.alpha}</label>
        <input
          type="range"
          name="alpha"
          min="0.1"
          max="3"
          step="0.1"
          value={params.alpha}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          This controls how deep the curve goes for negative inputs.
        </p>
      </div>
    </div>
  );
};

EluControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default EluControls;

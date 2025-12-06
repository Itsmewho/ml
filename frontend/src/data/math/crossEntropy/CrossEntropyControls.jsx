import PropTypes from 'prop-types';

const CrossEntropyControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label>Predicted Probability (p): {params.probability}</label>
        <input
          type="range"
          name="probability"
          min="0.01"
          max="1.0"
          step="0.01"
          value={params.probability}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
          Slide left (toward 0) to see what happens when the model is &apos;Confidently
          Wrong&apos;.
        </p>
      </div>
    </div>
  );
};

CrossEntropyControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default CrossEntropyControls;

import PropTypes from 'prop-types';

const NormalControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div>
      <label>Mean: {params.mean}</label>
      <input
        type="range"
        name="mean"
        min="-5"
        max="5"
        step="0.1"
        value={params.mean}
        onChange={handleChange}
      />

      <br />

      <label>Std Dev: {params.stdDev}</label>
      <input
        type="range"
        name="stdDev"
        min="0.1"
        max="3"
        step="0.1"
        value={params.stdDev}
        onChange={handleChange}
      />
    </div>
  );
};

NormalControls.propTypes = {
  params: PropTypes.shape({
    mean: PropTypes.number,
    stdDev: PropTypes.number,
  }).isRequired,
  setParams: PropTypes.func.isRequired,
};

export default NormalControls;

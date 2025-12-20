import PropTypes from 'prop-types';

const PerceptronControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: 'var(--clr-primary)' }}>
          Weight 1 (x1 importance): {params.w1}
        </label>
        <input
          type="range"
          name="w1"
          min="-5"
          max="5"
          step="0.1"
          value={params.w1}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: 'var(--clr-primary)' }}>
          Weight 2 (x2 importance): {params.w2}
        </label>
        <input
          type="range"
          name="w2"
          min="-5"
          max="5"
          step="0.1"
          value={params.w2}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#a855f7' }}>Bias (Threshold): {params.bias}</label>
        <input
          type="range"
          name="bias"
          min="-5"
          max="5"
          step="0.1"
          value={params.bias}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <p style={{ fontSize: '0.8rem', color: '#666' }}>
        <strong>Goal:</strong> Adjust the sliders to separate the Blue dot (1,1) from the
        three Red dots. (Hint: Try w1=1, w2=1, bias=-1.5)
      </p>
    </div>
  );
};

PerceptronControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default PerceptronControls;

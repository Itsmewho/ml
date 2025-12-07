import PropTypes from 'prop-types';

const BayesControls = ({ params, setParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* 1. Prevalence (How rare is it?) */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ color: '#3b82f6' }}>
          Prevalence (Rarity): {params.prevalence}%
        </label>
        <input
          type="range"
          name="prevalence"
          min="0.1"
          max="50"
          step="0.1"
          value={params.prevalence}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0' }}>
          Most diseases are rare (e.g., 1%).
        </p>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1rem' }} />

      {/* 2. Sensitivity (True Positive Rate) */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Sensitivity (Test Accuracy on Sick): {params.sensitivity}%</label>
        <input
          type="range"
          name="sensitivity"
          min="80"
          max="100"
          step="0.1"
          value={params.sensitivity}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* 3. Specificity (True Negative Rate) */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Specificity (Test Accuracy on Healthy): {params.specificity}%</label>
        <input
          type="range"
          name="specificity"
          min="80"
          max="100"
          step="0.1"
          value={params.specificity}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0' }}>
          If this is 90%, then 10% of healthy people get False Positives.
        </p>
      </div>
    </div>
  );
};

BayesControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default BayesControls;

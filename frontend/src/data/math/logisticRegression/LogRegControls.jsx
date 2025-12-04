import PropTypes from 'prop-types';

const DATA_POINTS = [
  { x: -3, y: 0 },
  { x: -2, y: 0 },
  { x: -0.5, y: 0 },
  { x: 0.5, y: 1 },
  { x: 2, y: 1 },
  { x: 4, y: 1 },
];

const LogisticControls = ({ params, setParams }) => {
  // Calculate Accuracy
  let correct = 0;
  DATA_POINTS.forEach((p) => {
    const z = params.slope * p.x + params.intercept;
    const probability = 1 / (1 + Math.exp(-z));

    // If prob > 0.5, we predict 1. Else we predict 0.
    const prediction = probability >= 0.5 ? 1 : 0;

    if (prediction === p.y) correct++;
  });

  const accuracy = Math.round((correct / DATA_POINTS.length) * 100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* Scoreboard */}
      <div
        style={{
          background:
            accuracy === 100 ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 255, 0, 0.1)',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          marginBottom: '1rem',
          border: '1px solid var(--clr-bordercolor)',
        }}
      >
        <h4 style={{ margin: 0 }}>Accuracy: {accuracy}%</h4>
        <p style={{ fontSize: '0.8rem', margin: '5px 0 0 0', opacity: 0.7 }}>
          {correct} out of {DATA_POINTS.length} correct
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Weight (Steepness): {params.slope}</label>
        <input
          type="range"
          name="slope"
          min="0"
          max="5"
          step="0.1"
          value={params.slope}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Bias (Shift): {params.intercept}</label>
        <input
          type="range"
          name="intercept"
          min="-5"
          max="5"
          step="0.1"
          value={params.intercept}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

LogisticControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default LogisticControls;

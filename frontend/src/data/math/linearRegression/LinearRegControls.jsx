import PropTypes from 'prop-types';

// Same data to calculate error
const DATA_POINTS = [
  { x: -3, y: -2 },
  { x: -1, y: -0.5 },
  { x: 1, y: 1.5 },
  { x: 2, y: 1 },
  { x: 3.5, y: 3 },
];

const LinearRegressionControls = ({ params, setParams }) => {
  // Calculate how "wrong" the line is
  // MSE = Average of (Real_Y - Predicted_Y)^2
  let totalErrorSq = 0;
  DATA_POINTS.forEach((p) => {
    const predictedY = params.slope * p.x + params.intercept;
    const error = p.y - predictedY;
    totalErrorSq += error * error;
  });
  const mse = totalErrorSq / DATA_POINTS.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      {/* The Scoreboard */}
      <div
        style={{
          background: mse < 0.5 ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          marginBottom: '1rem',
          border: '1px solid var(--clr-bordercolor)',
        }}
      >
        <h4 style={{ margin: 0 }}>MSE (Loss): {mse.toFixed(3)}</h4>
        <p style={{ fontSize: '0.8rem', margin: '5px 0 0 0', opacity: 0.7 }}>
          Goal: Make this number as low as possible!
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Slope (Weight): {params.slope}</label>
        <input
          type="range"
          name="slope"
          min="-2"
          max="2"
          step="0.05"
          value={params.slope}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Intercept (Bias): {params.intercept}</label>
        <input
          type="range"
          name="intercept"
          min="-3"
          max="3"
          step="0.1"
          value={params.intercept}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

LinearRegressionControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default LinearRegressionControls;

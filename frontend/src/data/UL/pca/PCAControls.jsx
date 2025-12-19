import PropTypes from 'prop-types';

const PCAControls = ({ params, setParams }) => {
  // Calculate Variance "Live" for display
  // 1. Project points
  const rad = (params.angle * Math.PI) / 180;
  const dirX = Math.cos(rad);
  const dirY = Math.sin(rad);

  const DATA = [
    { x: -2, y: -2.5 },
    { x: -1, y: -0.8 },
    { x: -2.5, y: -1.5 },
    { x: 0, y: 0 },
    { x: 0.5, y: 0.2 },
    { x: -0.5, y: -0.5 },
    { x: 1, y: 1.5 },
    { x: 2, y: 1.8 },
    { x: 2.5, y: 3 },
    { x: 1.5, y: 0.5 },
  ];

  const projectedValues = DATA.map((pt) => pt.x * dirX + pt.y * dirY);

  // 2. Variance = Average of squared differences from mean (mean is approx 0 here)
  const sumSq = projectedValues.reduce((sum, val) => sum + val * val, 0);
  const variance = (sumSq / DATA.length).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="controls-content">
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'center',
          border: '1px solid var(--clr-bordercolor)',
        }}
      >
        <h4 style={{ margin: '0 0 5px 0' }}>Captured Variance: {variance}</h4>
        <p style={{ fontSize: '0.8rem', margin: 0, color: '#888' }}>
          Goal: Rotate the line to maximize this number.
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Rotation Angle: {params.angle}°</label>
        <input
          type="range"
          name="angle"
          min="0"
          max="180"
          step="1"
          value={params.angle}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

PCAControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default PCAControls;

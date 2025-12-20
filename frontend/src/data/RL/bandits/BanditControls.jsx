import PropTypes from 'prop-types';

const BanditControls = ({ setParams }) => {
  // Hidden Truth: Arm 1 is bad (20%), Arm 2 is okay (50%), Arm 3 is best (80%)
  const PROBABILITIES = [0.2, 0.5, 0.8];

  const pull = (armIndex) => {
    const win = Math.random() < PROBABILITIES[armIndex];

    setParams((prev) => {
      const newArms = [...prev.arms];
      newArms[armIndex] = {
        pulls: newArms[armIndex].pulls + 1,
        wins: newArms[armIndex].wins + (win ? 1 : 0),
      };

      return {
        ...prev,
        arms: newArms,
        totalReward: prev.totalReward + (win ? 1 : 0),
        history: [...prev.history, { arm: armIndex, reward: win ? 1 : 0 }],
      };
    });
  };

  return (
    <div className="controls-content">
      <p
        style={{
          fontSize: '0.9rem',
          color: '#666',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Which machine is lucky? Click to find out.
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => pull(0)} style={btnStyle}>
          Pull 1
        </button>
        <button onClick={() => pull(1)} style={btnStyle}>
          Pull 2
        </button>
        <button onClick={() => pull(2)} style={btnStyle}>
          Pull 3
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '10px 20px',
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

BanditControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};
export default BanditControls;

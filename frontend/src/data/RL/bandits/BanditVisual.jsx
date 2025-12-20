import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const BanditVisual = ({ params }) => {
  const { arms, history, totalReward } = params;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* The Arms (Slot Machines) */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        {arms.map((arm, i) => (
          <div
            key={i}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div
              style={{
                width: '60px',
                height: '80px',
                background: '#222',
                border: `2px solid ${Theme.purple}`,
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem',
                marginBottom: '10px',
              }}
            >
              🎰
            </div>
            <div style={{ fontSize: '0.8rem', color: '#888' }}>
              Wins: {arm.wins} / {arm.pulls}
            </div>
            <div style={{ fontWeight: 'bold', color: Theme.green }}>
              {arm.pulls > 0 ? Math.round((arm.wins / arm.pulls) * 100) : 0}%
            </div>
          </div>
        ))}
      </div>

      {/* History Tape */}
      <div
        style={{
          display: 'flex',
          gap: '5px',
          overflowX: 'auto',
          maxWidth: '100%',
          paddingBottom: '10px',
        }}
      >
        {history.slice(-10).map((h, i) => (
          <div
            key={i}
            style={{
              padding: '5px 10px',
              borderRadius: '4px',
              background: h.reward > 0 ? Theme.green : '#333',
              color: 'white',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
            }}
          >
            Arm {h.arm + 1}: {h.reward > 0 ? '+$1' : '$0'}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Total Cash: <span style={{ color: Theme.green }}>${totalReward}</span>
      </div>
    </div>
  );
};

BanditVisual.propTypes = { params: PropTypes.object.isRequired };
export default BanditVisual;

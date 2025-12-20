import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const QLearningVisual = ({ params }) => {
  const { grid, agentPos, qTable } = params;
  const SIZE = 60;
  const GAP = 5;

  const getArrow = (r, c) => {
    // Check Q-Table for best action at this position
    // qTable key format: "r,c" -> { 0: upVal, 1: rightVal, 2: downVal, 3: leftVal }
    const qValues = qTable[`${r},${c}`];
    if (!qValues) return null;

    // Find Max Action
    let maxVal = -Infinity;
    let bestAction = -1;
    Object.entries(qValues).forEach(([action, val]) => {
      if (val > maxVal) {
        maxVal = val;
        bestAction = parseInt(action);
      }
    });

    if (maxVal === 0) return null; // No knowledge yet

    const arrows = ['↑', '→', '↓', '←']; // 0=Up, 1=Right, 2=Down, 3=Left
    return (
      <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>
        {arrows[bestAction]}
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: GAP }}>
        {grid.map((rowArr, r) =>
          rowArr.map((val, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                width: SIZE,
                height: SIZE,
                background: val === 1 ? '#444' : '#222',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border:
                  agentPos.r === r && agentPos.c === c
                    ? `2px solid ${Theme.blue}`
                    : '1px solid #333',
              }}
            >
              {val === 2 ? '🔥' : val === 3 ? '🏆' : getArrow(r, c)}
              {agentPos.r === r && agentPos.c === c && '🤖'}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

QLearningVisual.propTypes = { params: PropTypes.object.isRequired };
export default QLearningVisual;

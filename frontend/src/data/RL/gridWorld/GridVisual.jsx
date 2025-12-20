import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const GridWorldVisual = ({ params }) => {
  const { grid, agentPos, score, gameOver } = params;

  // Grid is 4x4.
  // 0=Empty, 1=Wall, 2=Fire, 3=Gold

  const SIZE = 60;
  const GAP = 5;

  const renderCell = (row, col, val) => {
    // Is the agent here?
    const isAgent = agentPos.r === row && agentPos.c === col;

    let content = '';
    let bg = '#222';

    if (val === 1) {
      bg = '#444';
      content = '🪨';
    } // Wall
    if (val === 2) {
      bg = 'rgba(239, 68, 68, 0.2)';
      content = '🔥';
    } // Fire
    if (val === 3) {
      bg = 'rgba(34, 197, 94, 0.2)';
      content = '🏆';
    } // Gold

    if (isAgent) {
      // If agent is on top of something, show both or just agent depending on state
      content = gameOver ? (val === 2 ? '💀' : '😎') : '🤖';
    }

    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: SIZE,
          height: SIZE,
          background: bg,
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.8rem',
          border: isAgent ? `2px solid ${Theme.blue}` : '1px solid #333',
        }}
      >
        {content}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* The Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: GAP,
          marginBottom: '20px',
        }}
      >
        {grid.map((rowArr, r) => rowArr.map((val, c) => renderCell(r, c, val)))}
      </div>

      {/* Scoreboard */}
      <div
        style={{
          padding: '10px 20px',
          background: '#111',
          borderRadius: '8px',
          border: `1px solid ${score > 0 ? Theme.green : score < 0 ? Theme.red : '#666'}`,
          color: score > 0 ? Theme.green : score < 0 ? Theme.red : '#fff',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        Score: {score}
      </div>

      {gameOver && (
        <div style={{ marginTop: '10px', color: Theme.foreground, fontWeight: 'bold' }}>
          {score > 0 ? 'You Won! 🎉' : 'Game Over 💀'}
        </div>
      )}
    </div>
  );
};

GridWorldVisual.propTypes = {
  params: PropTypes.shape({
    grid: PropTypes.arrayOf(PropTypes.array).isRequired,
    agentPos: PropTypes.shape({ r: PropTypes.number, c: PropTypes.number }).isRequired,
    score: PropTypes.number.isRequired,
    gameOver: PropTypes.bool.isRequired,
  }).isRequired,
};

export default GridWorldVisual;

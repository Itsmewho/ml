import PropTypes from 'prop-types';

const GridWorldControls = ({ params, setParams }) => {
  const INITIAL_GRID = [
    [0, 0, 0, 1],
    [0, 1, 0, 2],
    [0, 0, 0, 0],
    [0, 2, 0, 3],
  ];

  const move = (dr, dc) => {
    if (params.gameOver) return;
    const { agentPos, grid, score } = params;
    const newR = agentPos.r + dr;
    const newC = agentPos.c + dc;

    if (newR < 0 || newR >= 4 || newC < 0 || newC >= 4) return;
    if (grid[newR][newC] === 1) return; // Wall

    let newScore = score - 1; // Step cost
    let isGameOver = false;
    const cell = grid[newR][newC];

    if (cell === 2) {
      newScore -= 100;
      isGameOver = true;
    } // Fire
    if (cell === 3) {
      newScore += 100;
      isGameOver = true;
    } // Gold

    setParams((prev) => ({
      ...prev,
      agentPos: { r: newR, c: newC },
      score: newScore,
      gameOver: isGameOver,
    }));
  };

  const reset = () => {
    setParams({
      grid: INITIAL_GRID,
      agentPos: { r: 0, c: 0 },
      score: 0,
      gameOver: false,
    });
  };

  const btnStyle = {
    width: '40px',
    height: '40px',
    background: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  };

  return (
    <div className="controls-content">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '1.5rem',
        }}
      >
        <button onClick={() => move(-1, 0)} style={btnStyle}>
          ↑
        </button>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button onClick={() => move(0, -1)} style={btnStyle}>
            ←
          </button>
          <button onClick={() => move(1, 0)} style={btnStyle}>
            ↓
          </button>
          <button onClick={() => move(0, 1)} style={btnStyle}>
            →
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={reset}
          style={{
            background: 'transparent',
            border: '1px solid #666',
            color: '#888',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

GridWorldControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};
export default GridWorldControls;

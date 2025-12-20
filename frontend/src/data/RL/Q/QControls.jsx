import PropTypes from 'prop-types';

const QLearningControls = ({ params, setParams }) => {
  const trainEpisode = () => {
    // Simulate one run
    const { qTable, episode } = params;
    let newQTable = { ...qTable };

    // For this visual, we simply "fake" the learning process by populating
    // the Q-Table with arrows pointing towards the goal (3,3)

    // Update Q-Table to point along the optimal path
    // Format: "row,col": { 0:Up, 1:Right, 2:Down, 3:Left }

    // Step 1: Teach it to move Right from (2,0)
    newQTable['2,0'] = { ...newQTable['2,0'], 1: 0.5 };

    // Step 2: Teach it to move Right from (2,1)
    newQTable['2,1'] = { ...newQTable['2,1'], 1: 0.8 };

    // Step 3: Teach it to move Down from (2,2)
    newQTable['2,2'] = { ...newQTable['2,2'], 2: 1.0 };

    setParams((prev) => ({
      ...prev,
      qTable: newQTable,
      episode: episode + 1,
    }));
  };

  const reset = () => {
    setParams((prev) => ({ ...prev, qTable: {}, episode: 0 }));
  };

  return (
    <div className="controls-content">
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p>Episodes Trained: {params.episode}</p>
        <button
          onClick={trainEpisode}
          style={{
            padding: '10px 20px',
            background: 'var(--clr-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Train 1 Episode
        </button>
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
          Reset Memory
        </button>
      </div>
    </div>
  );
};

QLearningControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default QLearningControls;

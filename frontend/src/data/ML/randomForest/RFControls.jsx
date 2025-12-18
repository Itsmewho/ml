import PropTypes from 'prop-types';

const RandomForestControls = ({ params, setParams }) => {
  const toggle = (key) => {
    setParams((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="controls-content">
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
        Activate different Weak Trees to see how they vote together to form a complex
        Strong boundary.
      </p>

      {/* Tree 1 Toggle */}
      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <text>Tree 1 (Vertical Cut)</text>
        <button
          onClick={() => toggle('showTree1')}
          style={{
            padding: '5px 15px',
            background: params.showTree1 ? '#3b82f6' : '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {params.showTree1 ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Tree 2 Toggle */}
      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <taxt>Tree 2 (Horizontal Cut)</taxt>
        <button
          onClick={() => toggle('showTree2')}
          style={{
            padding: '5px 15px',
            background: params.showTree2 ? '#3b82f6' : '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {params.showTree2 ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Tree 3 Toggle */}
      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <text>Tree 3 (Diamond Cut)</text>
        <button
          onClick={() => toggle('showTree3')}
          style={{
            padding: '5px 15px',
            background: params.showTree3 ? '#3b82f6' : '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {params.showTree3 ? 'ON' : 'OFF'}
        </button>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, margin: '1rem 0' }} />

      <div
        style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: '#888',
        }}
      >
        {params.showTree1 && params.showTree2 && params.showTree3
          ? 'Full Ensemble Active: A complex shape emerges!'
          : 'Turn on more trees to refine the shape.'}
      </div>
    </div>
  );
};

RandomForestControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default RandomForestControls;

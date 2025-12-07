import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const ShannonVisual = ({ params }) => {
  const { text, level } = params;

  // Aesthetic labels
  let label = 'Level 0: Pure Randomness';
  if (level === 1) label = 'Level 1: Letter Frequency';
  if (level === 2) label = 'Level 2: Bigrams (Markov)';

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
      }}
    >
      {/* The Paper / Screen */}
      <div
        style={{
          width: '90%',
          height: '200px',
          background: '#0f172a53',
          border: `2px solid ${Theme.blue}`,
          borderRadius: '8px',
          padding: '20px',
          color: '#22c55e',
          overflowY: 'auto',
          fontSize: '1.2rem',
          lineHeight: '1.5',
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)',
        }}
      >
        {text}
        <span className="cursor" style={{ animation: 'blink 1s step-end infinite' }}>
          |
        </span>
      </div>

      <div style={{ marginTop: '20px', color: '#888', fontWeight: 'bold' }}>{label}</div>

      {/* CSS for the blinking cursor */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

ShannonVisual.propTypes = {
  params: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShannonVisual;

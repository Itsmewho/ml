import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const RNNVisual = ({ params }) => {
  const { sequence, currentStep, hiddenStates } = params;

  const BOX_W = 60;
  const GAP = 20;
  const START_X = 50;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        justifyContent: 'center',
      }}
    >
      <svg width="100%" height="250" viewBox="0 0 600 250">
        {/* Draw Arrows Connecting States (The "Time" Flow) */}
        {sequence.map((_, i) => {
          if (i === 0) return null;
          return (
            <line
              key={`arrow-${i}`}
              x1={START_X + (i - 1) * (BOX_W + GAP) + BOX_W}
              y1={100}
              x2={START_X + i * (BOX_W + GAP)}
              y2={100}
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          );
        })}

        {/* Draw The Steps */}
        {sequence.map((word, i) => {
          // Determine Color based on hidden state value (-1 to 1)
          // -1 (Red/Sad) ... 0 (Grey) ... 1 (Green/Happy)
          const hVal = hiddenStates[i] || 0;
          let color = '#888';
          if (hVal > 0.2) color = Theme.green;
          if (hVal < -0.2) color = Theme.red;

          const isActive = i === currentStep;

          return (
            <g key={i} transform={`translate(${START_X + i * (BOX_W + GAP)}, 50)`}>
              {/* 1. INPUT (Bottom) */}
              <text
                x={BOX_W / 2}
                y={130}
                textAnchor="middle"
                fill={isActive ? 'white' : '#666'}
                fontWeight={isActive ? 'bold' : 'normal'}
              >
                {word}
              </text>
              <line
                x1={BOX_W / 2}
                y1={115}
                x2={BOX_W / 2}
                y2={80}
                stroke="#444"
                strokeWidth="1"
              />

              {/* 2. HIDDEN STATE (The Brain Box) */}
              <rect
                width={BOX_W}
                height={50}
                rx={8}
                fill={color}
                stroke={isActive ? 'white' : 'none'}
                strokeWidth={2}
                opacity={i <= currentStep ? 1 : 0.2} // Fade out future steps
              />
              <text
                x={BOX_W / 2}
                y={30}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                h: {hVal.toFixed(1)}
              </text>

              {/* Label */}
              <text x={BOX_W / 2} y={-10} textAnchor="middle" fill="#666" fontSize="10">
                t={i}
              </text>
            </g>
          );
        })}

        {/* Arrow Marker Definition */}
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#666" />
          </marker>
        </defs>
      </svg>

      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: Theme.foreground }}>
        Prediction:{' '}
        {hiddenStates[currentStep] > 0.3
          ? 'Positive 😄'
          : hiddenStates[currentStep] < -0.3
          ? 'Negative 😡'
          : 'Neutral 😐'}
      </div>
    </div>
  );
};

RNNVisual.propTypes = {
  params: PropTypes.shape({
    sequence: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentStep: PropTypes.number.isRequired,
    hiddenStates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default RNNVisual;

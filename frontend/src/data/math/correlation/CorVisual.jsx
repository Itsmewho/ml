import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const BOX_SIZE = 50;
const GAP = 10;
const START_X = 100; // Increased spacing for labels
const BLUE_BLACK = '#0f172a'; // Dark background for active boxes

// Helper to clean up ugly floats (e.g., 2.69999 -> 2.7)
const formatNumber = (num) => {
  return parseFloat(num.toFixed(2));
};

// --- 1. Helper Component ---
const NumberBox = ({ x, y, val, color, highlight }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect
      width={BOX_SIZE}
      height={BOX_SIZE}
      rx={8}
      fill={highlight ? BLUE_BLACK : 'transparent'}
      stroke={color}
      strokeWidth={highlight ? 2 : 1}
      opacity={highlight ? 1 : 0.3}
    />
    <text
      x={BOX_SIZE / 2}
      y={BOX_SIZE / 2}
      dy=".35em"
      textAnchor="middle"
      fill={highlight ? 'white' : color}
      style={{ fontSize: '18px', fontWeight: 'bold' }}
    >
      {formatNumber(val)}
    </text>
  </g>
);

NumberBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  val: PropTypes.number,
  color: PropTypes.string,
  highlight: PropTypes.bool,
};

// --- 2. Main Component ---
const CorrelationVisual = ({ params }) => {
  const { input, kernel, step } = params;

  // Correlation Logic
  const outputLength = input.length - kernel.length + 1;
  const output = [];

  for (let i = 0; i < outputLength; i++) {
    let sum = 0;
    for (let k = 0; k < kernel.length; k++) {
      sum += input[i + k] * kernel[k];
    }
    output.push(sum);
  }

  // Layout Constants
  const Y_INPUT = 40;
  const Y_KERNEL = 120;
  const Y_OUTPUT = 200;

  return (
    <div
      style={{
        width: '100%',
        height: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Increased width to fit labels */}
      <svg width="100%" height="320" viewBox="0 0 600 320">
        {/* --- ROW 1: INPUT --- */}
        <text x={10} y={Y_INPUT + 30} fill="#888" fontWeight="bold" fontSize="14">
          Input:
        </text>

        {input.map((val, i) => (
          <NumberBox
            key={`in-${i}`}
            x={START_X + i * (BOX_SIZE + GAP)}
            y={Y_INPUT}
            val={val}
            color={Theme.blue}
            highlight={i >= step && i < step + kernel.length}
          />
        ))}

        {/* --- ROW 2: KERNEL --- */}
        <text x={10} y={Y_KERNEL + 30} fill="#888" fontWeight="bold" fontSize="14">
          Filter:
        </text>

        <g transform={`translate(${step * (BOX_SIZE + GAP)}, 0)`}>
          {kernel.map((val, i) => (
            <NumberBox
              key={`kern-${i}`}
              x={START_X + i * (BOX_SIZE + GAP)}
              y={Y_KERNEL}
              val={val}
              color={Theme.red}
              highlight={true}
            />
          ))}
        </g>

        {/* --- LINES --- */}
        {kernel.map((_, i) => (
          <line
            key={`line-${i}`}
            x1={START_X + (step + i) * (BOX_SIZE + GAP) + BOX_SIZE / 2}
            y1={Y_INPUT + BOX_SIZE}
            x2={START_X + (step + i) * (BOX_SIZE + GAP) + BOX_SIZE / 2}
            y2={Y_KERNEL}
            stroke={Theme.foreground}
            strokeDasharray="4"
            opacity={0.3}
          />
        ))}

        {/* --- ROW 3: OUTPUT --- */}
        <text x={10} y={Y_OUTPUT + 30} fill="#888" fontWeight="bold" fontSize="14">
          Match:
        </text>

        {output.map((val, i) => (
          <NumberBox
            key={`out-${i}`}
            x={START_X + i * (BOX_SIZE + GAP)}
            y={Y_OUTPUT}
            val={val}
            color={Theme.green}
            highlight={i === step}
          />
        ))}

        <text x="300" y="300" textAnchor="middle" fontSize="14" fill="#777">
          High Value = Strong Match
        </text>
      </svg>
    </div>
  );
};

CorrelationVisual.propTypes = {
  params: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.number).isRequired,
    kernel: PropTypes.arrayOf(PropTypes.number).isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

export default CorrelationVisual;

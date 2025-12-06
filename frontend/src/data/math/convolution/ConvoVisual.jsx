import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const BOX_SIZE = 50;
const GAP = 10;
const START_X = 100; // Increased to give room for labels on the left
const BLUE_BLACK = '#0f172a'; // Your requested box color

const formatNumber = (num) => {
  return parseFloat(num.toFixed(2));
};

// --- 1. Helper Component ---
const NumberBox = ({ x, y, val, color, label, highlight }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* The Box Background */}
    <rect
      width={BOX_SIZE}
      height={BOX_SIZE}
      rx={8}
      // Fill is BlueBlack if active, otherwise transparent
      fill={highlight ? BLUE_BLACK : 'transparent'}
      // Border is the specific Theme color (Red/Blue/Green)
      stroke={color}
      strokeWidth={highlight ? 2 : 1}
      opacity={highlight ? 1 : 0.3} // Fade out inactive boxes slightly
    />

    {/* The Number */}
    <text
      x={BOX_SIZE / 2}
      y={BOX_SIZE / 2}
      dy=".35em"
      textAnchor="middle"
      // Text is White if active, otherwise the Theme color
      fill={highlight ? 'white' : color}
      style={{ fontSize: '18px', fontWeight: 'bold' }}
    >
      {formatNumber(val)}
    </text>

    {/* Optional small label above box (like indices) */}
    {label && (
      <text x={BOX_SIZE / 2} y={-8} textAnchor="middle" fill="#888" fontSize="11">
        {label}
      </text>
    )}
  </g>
);

NumberBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  val: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  highlight: PropTypes.bool,
};

// --- 2. Main Component ---
const ConvolutionVisual = ({ params }) => {
  const { input, kernel, step } = params;

  // Calculate Output
  const outputLength = input.length - kernel.length + 1;
  const output = [];

  for (let i = 0; i < outputLength; i++) {
    let sum = 0;
    for (let k = 0; k < kernel.length; k++) {
      sum += input[i + k] * kernel[k];
    }
    output.push(sum);
  }

  // Math String Calculation
  const mathStrParts = kernel.map((kVal, idx) => {
    const inputVal = input[step + idx];
    return `(${inputVal} * ${kVal})`;
  });
  const mathStr = mathStrParts.join(' + ') + ` = ${output[step]}`;

  // Y-Coordinates for the rows (Spaced out better)
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
      {/* Increased viewBox width to 600 to prevent cutting off on the right */}
      <svg width="100%" height="320" viewBox="0 0 600 320">
        {/* --- ROW 1: INPUT --- */}
        {/* Label aligned to the left of the boxes */}
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
          Kernel:
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

        {/* --- CONNECTOR LINES --- */}
        {/* Dashed lines connecting Input to Kernel to show multiplication */}
        {kernel.map((_, i) => (
          <line
            key={`line-${i}`}
            x1={START_X + (step + i) * (BOX_SIZE + GAP) + BOX_SIZE / 2}
            y1={Y_INPUT + BOX_SIZE} // Bottom of Input
            x2={START_X + (step + i) * (BOX_SIZE + GAP) + BOX_SIZE / 2}
            y2={Y_KERNEL} // Top of Kernel
            stroke={Theme.foreground}
            strokeDasharray="4"
            opacity={0.3}
          />
        ))}

        {/* --- ROW 3: OUTPUT --- */}
        <text x={10} y={Y_OUTPUT + 30} fill="#888" fontWeight="bold" fontSize="14">
          Output:
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

        {/* --- MATH EXPLANATION --- */}
        {/* Centered at bottom */}
        <text
          x="300"
          y={300}
          textAnchor="middle"
          fill="#777"
          fontSize="16"
          fontWeight="bold"
        >
          {mathStr}
        </text>
      </svg>
    </div>
  );
};

ConvolutionVisual.propTypes = {
  params: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.number).isRequired,
    kernel: PropTypes.arrayOf(PropTypes.number).isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConvolutionVisual;

import { Mafs, Coordinates, Plot, Point, Theme, Text } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded AND Gate Data (The classic problem Perceptrons solve)
const DATA = [
  { x1: 0, x2: 0, label: 0 },
  { x1: 1, x2: 0, label: 0 },
  { x1: 0, x2: 1, label: 0 },
  { x1: 1, x2: 1, label: 1 }, // Only (1,1) is True
];

const PerceptronVisual = ({ params }) => {
  const { w1, w2, bias } = params;

  // 1. The Decision Boundary Line
  // Equation: w1*x + w2*y + b = 0  =>  y = (-w1*x - b) / w2
  const decisionBoundary = (x) => {
    if (Math.abs(w2) < 0.01) return null; // Avoid divide by zero
    return (-w1 * x - bias) / w2;
  };

  // 2. Predict function for checking points
  const predict = (x1, x2) => {
    const sum = w1 * x1 + w2 * x2 + bias;
    return sum >= 0 ? 1 : 0; // Step Activation
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* SECTION 1: The Graph (What the Neuron "Sees") */}
      <Mafs zoom={true} pan={true} height={300} viewBox={{ x: [-1, 2], y: [-1, 2] }}>
        <Coordinates.Cartesian />

        {/* Draw the Decision Line */}
        {Math.abs(w2) > 0.01 && (
          <Plot.OfX y={decisionBoundary} color={Theme.purple} weight={3} />
        )}

        {/* Draw Data Points */}
        {DATA.map((pt, i) => {
          const prediction = predict(pt.x1, pt.x2);
          const isCorrect = prediction === pt.label;

          return (
            <g key={i}>
              {/* Outer Ring: Truth (Blue=1, Red=0) */}
              <Point
                x={pt.x1}
                y={pt.x2}
                color={pt.label === 1 ? Theme.blue : Theme.red}
                size={15}
                opacity={0.3}
              />

              {/* Inner Dot: Prediction (Filled if 1, Empty if 0) */}
              <Point
                x={pt.x1}
                y={pt.x2}
                color={prediction === 1 ? Theme.blue : Theme.red}
                size={8}
              />

              {/* Error Indicator */}
              {!isCorrect && (
                <Text x={pt.x1} y={pt.x2 + 0.2} color={Theme.orange} size={15}>
                  ERROR
                </Text>
              )}
            </g>
          );
        })}
      </Mafs>

      {/* SECTION 2: The Architecture (Visualizing the Flow) */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg
          width="350"
          height="150"
          viewBox="0 0 400 150"
          style={{
            border: '1px solid #333',
            borderRadius: '8px',
            background: 'var(--clr-background-mute)',
          }}
        >
          {/* Inputs */}
          <circle cx="50" cy="50" r="15" fill="#333" stroke="#666" />
          <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="12">
            x1
          </text>

          <circle cx="50" cy="100" r="15" fill="#333" stroke="#666" />
          <text x="50" y="105" textAnchor="middle" fill="#fff" fontSize="12">
            x2
          </text>

          {/* Weights (Lines) - Green if positive, Red if negative */}
          <line
            x1="65"
            y1="50"
            x2="190"
            y2="75"
            stroke={w1 > 0 ? Theme.green : Theme.red}
            strokeWidth={Math.abs(w1) * 2 + 1}
          />
          <text x="120" y="45" fill="#888" fontSize="11">
            w1: {w1}
          </text>

          <line
            x1="65"
            y1="100"
            x2="190"
            y2="75"
            stroke={w2 > 0 ? Theme.green : Theme.red}
            strokeWidth={Math.abs(w2) * 2 + 1}
          />
          <text x="120" y="120" fill="#888" fontSize="11">
            w2: {w2}
          </text>

          {/* The Neuron (Summation) */}
          <circle
            cx="220"
            cy="75"
            r="30"
            fill={Theme.purple}
            opacity={0.2}
            stroke={Theme.purple}
          />
          <text
            x="220"
            y="80"
            textAnchor="middle"
            fill={Theme.purple}
            fontSize="20"
            fontWeight="bold"
          >
            &Sigma;
          </text>
          <text x="220" y="125" textAnchor="middle" fill="#888" fontSize="10">
            Bias: {bias}
          </text>

          {/* Output */}
          <line
            x1="250"
            y1="75"
            x2="330"
            y2="75"
            stroke="#666"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Step Activation Visual */}
          <rect x="340" y="50" width="40" height="50" rx="4" fill="#222" stroke="#444" />
          <path
            d="M 345 80 L 355 80 L 355 60 L 375 60"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

PerceptronVisual.propTypes = {
  params: PropTypes.shape({
    w1: PropTypes.number.isRequired,
    w2: PropTypes.number.isRequired,
    bias: PropTypes.number.isRequired,
  }).isRequired,
};

export default PerceptronVisual;

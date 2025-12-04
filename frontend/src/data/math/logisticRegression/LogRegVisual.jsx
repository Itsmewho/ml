import { Mafs, Coordinates, Plot, Point, Theme, Line } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded Classification Data (0 or 1)
const DATA_POINTS = [
  { x: -3, y: 0, class: 0 },
  { x: -2, y: 0, class: 0 },
  { x: -0.5, y: 0, class: 0 },
  { x: 0.5, y: 1, class: 1 },
  { x: 2, y: 1, class: 1 },
  { x: 4, y: 1, class: 1 },
];

const LogisticVisual = ({ params }) => {
  const { slope, intercept } = params;

  // The Logistic Model: 1 / (1 + e^-(mx + b))
  const predict = (x) => {
    const z = slope * x + intercept;
    return 1 / (1 + Math.exp(-z));
  };

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-0.5, 1.5] }}>
      <Coordinates.Cartesian />

      {/* The Probability Curve */}
      <Plot.OfX y={predict} color={Theme.purple} weight={3} />

      {/* The Decision Boundary (50% Probability) */}
      <Line.Segment
        point1={[-5, 0.5]}
        point2={[5, 0.5]}
        style="dashed"
        color={Theme.grey}
        opacity={0.5}
      />

      {/* The Data Points */}
      {DATA_POINTS.map((point, index) => (
        <Point
          key={index}
          x={point.x}
          y={point.y}
          // Color code: Red for 0, Blue for 1
          color={point.class === 1 ? Theme.blue : Theme.red}
        />
      ))}
    </Mafs>
  );
};

LogisticVisual.propTypes = {
  params: PropTypes.shape({
    slope: PropTypes.number.isRequired,
    intercept: PropTypes.number.isRequired,
  }).isRequired,
};

export default LogisticVisual;

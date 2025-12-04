import { Mafs, Coordinates, Plot, Point, Line, Theme, Text } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded "Training Data"
const DATA_POINTS = [
  { x: -3, y: -2 },
  { x: -1, y: -0.5 },
  { x: 1, y: 1.5 },
  { x: 2, y: 1 },
  { x: 3.5, y: 3 },
];

const LinearRegressionVisual = ({ params }) => {
  const { slope, intercept } = params;

  // The Prediction Function: y = mx + b
  const predict = (x) => slope * x + intercept;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* 1. The Model (Your Line) */}
      <Plot.OfX y={predict} color={Theme.blue} weight={3} />

      {/* 2. The Data & The Errors */}
      {DATA_POINTS.map((point, index) => {
        const predictedY = predict(point.x);

        return (
          <g key={index}>
            {/* The Error Line (Residual) - Connects Data to Line */}
            <Line.Segment
              point1={[point.x, point.y]}
              point2={[point.x, predictedY]}
              color={Theme.red}
              style="dashed"
              opacity={0.5}
            />

            {/* The Data Point */}
            <Point x={point.x} y={point.y} color={Theme.foreground} />
          </g>
        );
      })}

      <Text x={5} y={4.5} size={15} color={Theme.blue}>
        Blue: Your Model
      </Text>
      <Text x={5} y={4.0} size={15} color={Theme.red}>
        Red: (Residuals)
      </Text>
    </Mafs>
  );
};

LinearRegressionVisual.propTypes = {
  params: PropTypes.shape({
    slope: PropTypes.number.isRequired,
    intercept: PropTypes.number.isRequired,
  }).isRequired,
};

export default LinearRegressionVisual;

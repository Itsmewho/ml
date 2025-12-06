import { Mafs, Coordinates, Plot, Point, Theme, Line, Text } from 'mafs';
import PropTypes from 'prop-types';

const LossVisual = ({ params }) => {
  const { errorVal, type, delta } = params; // type = 'mse', 'mae', or 'huber'

  // 1. Define the Math Functions
  const mse = (x) => x * x;
  const mae = (x) => Math.abs(x);

  // Huber is Quadratic (MSE) near 0, Linear (MAE) far away
  const huber = (x) => {
    const abs = Math.abs(x);
    return abs <= delta ? 0.5 * x * x : delta * (abs - 0.5 * delta);
  };

  // 2. Determine which function to use
  let activeFunc;
  let color;

  switch (type) {
    case 'mae':
      activeFunc = mae;
      color = Theme.orange;
      break;
    case 'huberloss':
      activeFunc = huber;
      color = Theme.indigo;
      break;
    case 'mse':
    default:
      activeFunc = mse;
      color = Theme.red;
      break;
  }

  // 3. Calculate current point
  const yVal = activeFunc(errorVal);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-3, 3], y: [-0.5, 5] }}>
      <Coordinates.Cartesian />

      {/* Draw the Curve */}
      <Plot.OfX y={activeFunc} color={color} weight={4} />

      {/* Visual Helper: The Error Line (Vertical) */}
      <Line.Segment
        point1={[errorVal, 0]}
        point2={[errorVal, yVal]}
        style="dashed"
        color={Theme.green}
      />

      {/* Visual Helper: The Point on the curve */}
      <Point x={errorVal} y={yVal} color={color} />

      {/* Show the calculated Loss */}
      <Text x={4} y={1} size={20}>
        Error: {errorVal} → Loss: {yVal.toFixed(2)}
      </Text>

      {/* Ghost Comparison (Optional): Show MSE faintly when viewing MAE to compare */}
      {type !== 'mse' && (
        <Plot.OfX y={mse} color={Theme.red} opacity={0.3} style="dashed" />
      )}
    </Mafs>
  );
};

LossVisual.propTypes = {
  params: PropTypes.shape({
    errorVal: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    delta: PropTypes.number, // Only for Huber
  }).isRequired,
};

export default LossVisual;

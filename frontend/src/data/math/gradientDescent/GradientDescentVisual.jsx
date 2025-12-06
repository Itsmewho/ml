import { Mafs, Coordinates, Plot, Point, Theme, Vector } from 'mafs';
import PropTypes from 'prop-types';

const GradientDescentVisual = ({ params }) => {
  const { position, learningRate } = params;

  // 1. The Loss Function (Error Curve) -> f(x) = x^2
  const lossFunction = (x) => x * x;

  // 2. The Gradient (Derivative) -> f'(x) = 2x
  const gradient = 2 * position;

  // 3. Tangent Line Equation: y = mx + b
  // y - y1 = m(x - x1)  =>  y = m(x - x1) + y1
  const tangentLine = (x) => gradient * (x - position) + lossFunction(position);

  // 4. Calculate Next Step
  // New Position = Old Position - (Learning Rate * Gradient)
  const nextPosition = position - learningRate * gradient;
  const nextY = lossFunction(nextPosition);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-3, 3], y: [-1, 5] }}>
      <Coordinates.Cartesian />

      {/* The Loss Curve */}
      <Plot.OfX y={lossFunction} color={Theme.blue} weight={3} />

      {/* The Tangent Line (Slope) */}
      <Plot.OfX
        y={tangentLine}
        color={Theme.red}
        style="dashed"
        opacity={0.5}
        weight={2}
      />

      {/* The "Step" Vector (Arrow showing where it moves) */}
      <Vector
        tail={[position, lossFunction(position)]}
        tip={[nextPosition, lossFunction(position)]} // Draw arrow horizontally first
        color={Theme.green}
      />

      {/* Current Position (The Ball) */}
      <Point x={position} y={lossFunction(position)} color={Theme.red} size={10} />

      {/* Next Position (Ghost Ball) */}
      <Point x={nextPosition} y={nextY} color={Theme.green} opacity={0.6} size={8} />
    </Mafs>
  );
};

GradientDescentVisual.propTypes = {
  params: PropTypes.shape({
    position: PropTypes.number.isRequired,
    learningRate: PropTypes.number.isRequired,
  }).isRequired,
};

export default GradientDescentVisual;

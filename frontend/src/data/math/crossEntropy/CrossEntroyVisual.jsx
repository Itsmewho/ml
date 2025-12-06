import { Mafs, Coordinates, Plot, Point, Theme, Line, Text } from 'mafs';
import PropTypes from 'prop-types';

const CrossEntropyVisual = ({ params }) => {
  const { probability } = params;

  // Formula: -ln(x)
  // This represents the loss when the True Label is 1
  const lossFunc = (x) => -Math.log(x);

  // Calculate current loss
  const currentLoss = lossFunc(probability);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-0.2, 1.2], y: [-0.5, 5] }}>
      <Coordinates.Cartesian />

      {/* The Log Loss Curve */}
      {/* We stop slightly before 0 because log(0) is infinity */}
      <Plot.OfX y={lossFunc} color={Theme.red} weight={3} min={0.001} max={1} />

      {/* Visual Helper: Vertical line to curve */}
      <Line.Segment
        point1={[probability, 0]}
        point2={[probability, currentLoss]}
        style="dashed"
        color={Theme.foreground}
      />

      {/* The Current Point */}
      <Point x={probability} y={currentLoss} color={Theme.red} />

      <Text x={5} y={4} size={20}>
        Prediction: {(probability * 100).toFixed(0)}%
      </Text>
      <Text x={0.5} y={3.5} size={20} color={Theme.red}>
        Loss: {currentLoss.toFixed(2)}
      </Text>
    </Mafs>
  );
};

CrossEntropyVisual.propTypes = {
  params: PropTypes.shape({
    probability: PropTypes.number.isRequired,
  }).isRequired,
};

export default CrossEntropyVisual;

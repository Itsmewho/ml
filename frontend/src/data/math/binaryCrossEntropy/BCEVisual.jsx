import { Mafs, Coordinates, Plot, Point, Theme, Text } from 'mafs';
import PropTypes from 'prop-types';

const BCEVisual = ({ params }) => {
  const { pred, truth } = params; // pred (0-1), truth (0 or 1)

  // 1. Loss when Truth = 1 ( -log(p) )
  const loss1 = (x) => -Math.log(x);

  // 2. Loss when Truth = 0 ( -log(1-p) )
  const loss0 = (x) => -Math.log(1 - x);

  // Calculate the specific loss for the current point
  const currentLoss = truth === 1 ? loss1(pred) : loss0(pred);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-0.1, 1.1], y: [-0.5, 4] }}>
      <Coordinates.Cartesian />

      {/* Curve for Truth = 1 (Red) */}
      <Plot.OfX
        y={loss1}
        color={Theme.red}
        weight={truth === 1 ? 4 : 2}
        opacity={truth === 1 ? 1 : 0.3}
        min={0.001}
        max={1}
      />
      <Text x={0.2} y={2} color={Theme.red} opacity={truth === 1 ? 1 : 0.3}>
        if y=1
      </Text>

      {/* Curve for Truth = 0 (Blue) */}
      <Plot.OfX
        y={loss0}
        color={Theme.blue}
        weight={truth === 0 ? 4 : 2}
        opacity={truth === 0 ? 1 : 0.3}
        min={0}
        max={0.999}
      />
      <Text x={0.8} y={2} color={Theme.blue} opacity={truth === 0 ? 1 : 0.3}>
        if y=0
      </Text>

      {/* The Player's Position */}
      <Point
        x={pred}
        y={currentLoss}
        color={truth === 1 ? Theme.red : Theme.blue}
        size={10}
      />

      {/* Info Label */}
      <Text x={5} y={3.5} size={20}>
        Loss: {currentLoss.toFixed(3)}
      </Text>
    </Mafs>
  );
};

BCEVisual.propTypes = {
  params: PropTypes.shape({
    pred: PropTypes.number.isRequired,
    truth: PropTypes.number.isRequired,
  }).isRequired,
};

export default BCEVisual;

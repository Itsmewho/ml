import { Mafs, Coordinates, Plot, Point, Theme, Text, Line } from 'mafs';
import PropTypes from 'prop-types';

const HingeVisual = ({ params }) => {
  const { pred, truth } = params; // truth is 1 or -1

  // Formula: max(0, 1 - truth * pred)
  const hingeLoss = (x) => Math.max(0, 1 - truth * x);

  // Calculate specific loss
  const currentLoss = hingeLoss(pred);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-3, 3], y: [-0.5, 4] }}>
      <Coordinates.Cartesian />

      {/* The Hinge Loss Curve */}
      <Plot.OfX y={hingeLoss} color={Theme.indigo} weight={4} />

      {/* The Margin Line (Safe Zone start) */}
      <Line.Segment
        point1={[truth, 0]}
        point2={[truth, 4]}
        style="dashed"
        color={Theme.red}
        opacity={0.5}
      />
      <Text x={truth} y={3.5} attach={truth === 1 ? 'ne' : 'nw'} color={Theme.grey}>
        Margin ({truth})
      </Text>

      {/* Visualizing the "Zero Loss" zone */}
      {/* If Truth=1, anything >1 is green. If Truth=-1, anything <-1 is green. */}
      <Line.Segment
        point1={[truth, 0.05]}
        point2={[truth * 4, 0.05]}
        color={Theme.green}
        weight={6}
        opacity={0.5}
      />

      {/* The Player Position */}
      <Point x={pred} y={currentLoss} color={Theme.purple} size={10} />

      <Text x={3} y={3} size={20} color={Theme.purple}>
        Loss: {currentLoss.toFixed(2)}
      </Text>
    </Mafs>
  );
};

HingeVisual.propTypes = {
  params: PropTypes.shape({
    pred: PropTypes.number.isRequired,
    truth: PropTypes.number.isRequired,
  }).isRequired,
};

export default HingeVisual;

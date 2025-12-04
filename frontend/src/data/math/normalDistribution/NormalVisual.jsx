import { Mafs, Coordinates, Plot, Theme, Text } from 'mafs';
import PropTypes from 'prop-types';

const normalDist = (x, mean, stdDev) => {
  const variance = stdDev * stdDev;
  const scale = 1 / (stdDev * Math.sqrt(2 * Math.PI));
  const exponent = -Math.pow(x - mean, 2) / (2 * variance);
  return scale * Math.exp(exponent);
};

const NormalVisual = ({ params }) => {
  const { mean, stdDev } = params;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-0.5, 1.5] }}>
      <Coordinates.Cartesian />

      {/* The Bell Curve */}
      <Plot.OfX y={(x) => normalDist(x, mean, stdDev)} color={Theme.indigo} weight={3} />

      {/* Marker for the Mean (Center) */}
      <Plot.OfX
        y={() => 0} // Just a hack to draw a line? No, let's use Line.Segment if needed.
        // Or just let the peak speak for itself.
      />

      <Text x={mean} y={normalDist(mean, mean, stdDev) + 0.1} color={Theme.indigo}>
        μ
      </Text>
    </Mafs>
  );
};

NormalVisual.propTypes = {
  params: PropTypes.shape({
    mean: PropTypes.number.isRequired,
    stdDev: PropTypes.number.isRequired,
  }).isRequired,
};

export default NormalVisual;

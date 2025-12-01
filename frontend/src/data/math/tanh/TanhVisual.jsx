import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import PropTypes from 'prop-types';

const TanhVisual = ({ params }) => {
  const { steepness } = params;

  // Formula: tanh(k * x)
  const tanhFunc = (x) => Math.tanh(steepness * x);

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-2, 2] }}>
      <Coordinates.Cartesian />

      {/* The Tanh Curve */}
      <Plot.OfX y={tanhFunc} color={Theme.indigo} weight={3} />

      {/* Helper Lines: Show the -1 and 1 boundaries */}
      <Plot.OfX y={() => 1} color={Theme.red} style="dashed" opacity={0.3} />
      <Plot.OfX y={() => -1} color={Theme.red} style="dashed" opacity={0.3} />
    </Mafs>
  );
};

TanhVisual.propTypes = {
  params: PropTypes.shape({
    steepness: PropTypes.number.isRequired,
  }).isRequired,
};

export default TanhVisual;

import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import PropTypes from 'prop-types';

const eluFunc = (x, alpha) => {
  if (x > 0) return x;
  return alpha * (Math.exp(x) - 1);
};

const EluVisual = ({ params }) => {
  const { alpha } = params;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-4, 4], y: [-3, 3] }}>
      <Coordinates.Cartesian />

      {/* The ELU Curve */}
      <Plot.OfX y={(x) => eluFunc(x, alpha)} color={Theme.indigo} weight={3} />

      {/* Helper Line: Asymptote (Where the curve flattens out at -alpha) */}
      <Plot.OfX y={() => -alpha} color={Theme.red} style="dashed" opacity={0.5} />
    </Mafs>
  );
};

EluVisual.propTypes = {
  params: PropTypes.shape({
    alpha: PropTypes.number.isRequired,
  }).isRequired,
};

export default EluVisual;

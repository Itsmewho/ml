import PropTypes from 'prop-types';
import { Mafs, Coordinates, Plot, Theme } from 'mafs';

const reluFunc = (x, leak) => {
  return x > 0 ? x : x * leak;
};

const ReluVisual = ({ params }) => {
  const { leak } = params;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-3, 3], y: [-3, 3] }}>
      <Coordinates.Cartesian />

      {/* The Function */}
      <Plot.OfX y={(x) => reluFunc(x, leak)} color={Theme.indigo} weight={4} />

      {/* Visual Helper: Show the "Dead Zone" if leak is 0 */}
      {leak === 0 && (
        <Plot.OfX y={() => 0} color={Theme.red} opacity={0.2} style="dashed" />
      )}
    </Mafs>
  );
};

ReluVisual.propTypes = {
  params: PropTypes.shape({
    leak: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReluVisual;

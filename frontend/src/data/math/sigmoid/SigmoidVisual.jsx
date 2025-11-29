import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import PropTypes from 'prop-types';

const sigmoidFunc = (x, steepness, midpoint) => {
  return 1 / (1 + Math.exp(-steepness * (x - midpoint)));
};

const SigmoidVisual = ({ params }) => {
  const { steepness, midpoint } = params;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-0.5, 1.5] }}>
      <Coordinates.Cartesian />
      <Plot.OfX
        y={(x) => sigmoidFunc(x, steepness, midpoint)}
        color={Theme.pink}
        weight={3}
      />
    </Mafs>
  );
};

SigmoidVisual.propTypes = {
  params: PropTypes.shape({
    steepness: PropTypes.number,
    midpoint: PropTypes.number,
  }).isRequired,
};

export default SigmoidVisual;

import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import PropTypes from 'prop-types';

const swishFunc = (x, beta) => {
  return x * (1 / (1 + Math.exp(-beta * x)));
};

const SwishVisual = ({ params }) => {
  const { beta } = params;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-4, 4], y: [-2, 3] }}>
      <Coordinates.Cartesian />

      <Plot.OfX y={(x) => swishFunc(x, beta)} color={Theme.pink} weight={3} />
    </Mafs>
  );
};

SwishVisual.propTypes = {
  params: PropTypes.shape({
    beta: PropTypes.number.isRequired,
  }).isRequired,
};

export default SwishVisual;

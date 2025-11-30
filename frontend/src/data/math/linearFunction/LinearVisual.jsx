import { Mafs, Coordinates, Plot, Point, Theme } from 'mafs';
import PropTypes from 'prop-types';

const LinearVisual = ({ params }) => {
  const { slope, intercept } = params; // slope = a, intercept = b

  const linearFunc = (x) => slope * x + intercept;

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* Draw the line */}
      <Plot.OfX y={linearFunc} color={Theme.indigo} weight={3} />

      {/* Hint for the intercept */}
      <Point x={0} y={intercept} color={Theme.red} opacity={0.5} />
    </Mafs>
  );
};

LinearVisual.propTypes = {
  params: PropTypes.shape({
    slope: PropTypes.number.isRequired,
    intercept: PropTypes.number.isRequired,
  }).isRequired,
};

export default LinearVisual;

import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import PropTypes from 'prop-types';

const normalDistribution = (x, mu, sigma) => {
  const coefficient = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const exponent = -0.5 * Math.pow((x - mu) / sigma, 2);
  return coefficient * Math.exp(exponent);
};

// This component only cares about receiving 'params'
const NormalVisual = ({ params }) => {
  const { mean, stdDev } = params;
  return (
    <Mafs zoom={true} pan={true} height={300}>
      <Coordinates.Cartesian />
      <Plot.OfX
        y={(x) => normalDistribution(x, mean, stdDev)}
        color={Theme.blue}
        weight={3}
      />
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

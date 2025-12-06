import { Mafs, Coordinates, Polygon, Theme, Text } from 'mafs';
import PropTypes from 'prop-types';

// --- 1. Define Helper Component OUTSIDE ---
const Bar = ({ xPos, height, color, label, opacity = 1 }) => (
  <>
    <Polygon
      points={[
        [xPos - 0.4, 0],
        [xPos + 0.4, 0],
        [xPos + 0.4, height],
        [xPos - 0.4, height],
      ]}
      color={color}
      fillOpacity={opacity}
      strokeOpacity={1}
    />
    <Text x={xPos} y={-0.3} size={20}>
      {label}
    </Text>
    {/* Divide height by 2 because we scaled it up visually */}
    <Text x={xPos} y={height + 0.2} size={15}>
      {(height / 2).toFixed(2)}
    </Text>
  </>
);

Bar.propTypes = {
  xPos: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  opacity: PropTypes.number,
};

// --- 2. Main Component ---
const SoftmaxVisual = ({ params }) => {
  const { val1, val2, val3 } = params;

  // Calculate Softmax
  const exp1 = Math.exp(val1);
  const exp2 = Math.exp(val2);
  const exp3 = Math.exp(val3);
  const sum = exp1 + exp2 + exp3;

  const p1 = exp1 / sum;
  const p2 = exp2 / sum;
  const p3 = exp3 / sum;

  return (
    <Mafs zoom={false} pan={false} height={550} viewBox={{ x: [-2, 2], y: [-0.5, 3] }}>
      <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />

      {/* Visual Scale: Multiply height by 2 for visibility */}
      <Bar xPos={-1} height={p1 * 2} color={Theme.red} label="Cat" />
      <Bar xPos={0} height={p2 * 2} color={Theme.green} label="Dog" />
      <Bar xPos={1} height={p3 * 2} color={Theme.blue} label="Bird" />

      <Text x={4} y={2.5} size={20} color={Theme.foreground}>
        Probabilities sum to 1.0
      </Text>
    </Mafs>
  );
};

SoftmaxVisual.propTypes = {
  params: PropTypes.shape({
    val1: PropTypes.number.isRequired,
    val2: PropTypes.number.isRequired,
    val3: PropTypes.number.isRequired,
  }).isRequired,
};

export default SoftmaxVisual;

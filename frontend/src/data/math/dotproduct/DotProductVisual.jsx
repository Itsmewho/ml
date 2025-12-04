import { Mafs, Coordinates, Vector, Text, Theme, Line } from 'mafs';
import PropTypes from 'prop-types';

const DotProductVisual = ({ params }) => {
  const { x1, y1, x2, y2 } = params;

  // 1. Calculate Dot Product
  const dotProduct = x1 * x2 + y1 * y2;

  // 2. Calculate Magnitude (Length) of Vector B squared
  const magB_sq = x2 * x2 + y2 * y2;

  // 3. Calculate the Projection Vector (The Shadow of A onto B)
  // Formula: (A . B) / (|B|^2) * B
  let projX = 0;
  let projY = 0;

  if (magB_sq !== 0) {
    const scalar = dotProduct / magB_sq;
    projX = scalar * x2;
    projY = scalar * y2;
  }

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* --- The Helper Elements (Draw these first so they are behind) --- */}

      {/* The "Light Source" Line: Connects Tip of A to the Projection */}
      <Line.Segment
        point1={[x1, y1]}
        point2={[projX, projY]}
        style="dashed"
        opacity={0.5}
        color={Theme.foreground}
      />

      {/* The Shadow Vector (Projection) */}
      <Vector tip={[projX, projY]} color={Theme.green} weight={2} />
      {/* Only label shadow if it's visible enough */}
      {Math.abs(dotProduct) > 0.5 && (
        <Text x={projX / 2} y={projY / 2} attach="se" color={Theme.green} size={10}>
          Shadow
        </Text>
      )}

      {/* --- The Main Vectors --- */}

      {/* Vector B (Red) - The "Floor" */}
      <Vector tip={[x2, y2]} color={Theme.red} />
      <Text x={x2} y={y2} attach="ne" color={Theme.red} size={20} weight="bold">
        B
      </Text>

      {/* Vector A (Blue) - The "Object" */}
      <Vector tip={[x1, y1]} color={Theme.blue} />
      <Text x={x1} y={y1} attach="ne" color={Theme.blue} size={20} weight="bold">
        A
      </Text>

      {/* Result Display */}
      <Text x={5} y={-4} size={20}>
        Result: {dotProduct.toFixed(2)}
      </Text>
    </Mafs>
  );
};

DotProductVisual.propTypes = {
  params: PropTypes.shape({
    x1: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
    x2: PropTypes.number.isRequired,
    y2: PropTypes.number.isRequired,
  }).isRequired,
};

export default DotProductVisual;

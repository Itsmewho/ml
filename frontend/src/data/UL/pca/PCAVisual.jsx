import { Mafs, Coordinates, Point, Theme, Line, Plot } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded Data: An oval shape stretched along y = x
const DATA = [
  { x: -2, y: -2.5 },
  { x: -1, y: -0.8 },
  { x: -2.5, y: -1.5 },
  { x: 0, y: 0 },
  { x: 0.5, y: 0.2 },
  { x: -0.5, y: -0.5 },
  { x: 1, y: 1.5 },
  { x: 2, y: 1.8 },
  { x: 2.5, y: 3 },
  { x: 1.5, y: 0.5 },
];

const PCAVisual = ({ params }) => {
  const { angle } = params;

  // 1. Convert Angle to Slope Vector (Direction)
  const rad = (angle * Math.PI) / 180;
  const dirX = Math.cos(rad);
  const dirY = Math.sin(rad);

  // Line equation passing through origin (0,0) with this slope
  // y = tan(angle) * x
  const slope = Math.tan(rad);
  const lineFunc = (x) => slope * x;

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-4, 4], y: [-4, 4] }}>
      <Coordinates.Cartesian />

      {/* The Axis Line (Principal Component Candidate) */}
      <Plot.OfX y={lineFunc} color={Theme.purple} weight={2} opacity={0.5} />

      {/* Draw Data and Projections */}
      {DATA.map((pt, i) => {
        // Calculate Projection of Point P onto Line L (passing through origin)
        // Formula: P_proj = (P . L) * L  (since L is unit vector)
        const dotProduct = pt.x * dirX + pt.y * dirY;
        const projX = dotProduct * dirX;
        const projY = dotProduct * dirY;

        return (
          <g key={i}>
            {/* The Projection Line (Connector) */}
            <Line.Segment
              point1={[pt.x, pt.y]}
              point2={[projX, projY]}
              color={Theme.red}
              opacity={0.3}
              style="dashed"
            />

            {/* The Original Point */}
            <Point x={pt.x} y={pt.y} color={Theme.blue} />

            {/* The Projected Point (Shadow) */}
            <Point x={projX} y={projY} color={Theme.red} size={5} />
          </g>
        );
      })}
    </Mafs>
  );
};

PCAVisual.propTypes = {
  params: PropTypes.shape({
    angle: PropTypes.number.isRequired,
  }).isRequired,
};

export default PCAVisual;

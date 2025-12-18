import { Mafs, Coordinates, Point, Theme, Line } from 'mafs';
import PropTypes from 'prop-types';

const KMeansVisual = ({ params }) => {
  const { points, centroids, assignments } = params;

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-4, 4], y: [-4, 4] }}>
      <Coordinates.Cartesian />

      {/* 1. Draw Lines connecting points to their Centroids (Visual Aid) */}
      {points.map((pt, i) => {
        const assignedIndex = assignments[i];
        if (assignedIndex === -1) return null; // Not assigned yet

        const centroid = centroids[assignedIndex];
        return (
          <Line.Segment
            key={`line-${i}`}
            point1={[pt.x, pt.y]}
            point2={[centroid.x, centroid.y]}
            color={Theme.foreground}
            opacity={0.1}
          />
        );
      })}

      {/* 2. Draw Data Points */}
      {points.map((pt, i) => {
        const assignedIndex = assignments[i];
        // If unassigned, show Grey. Else show Centroid's color.
        const color =
          assignedIndex === -1
            ? '#555'
            : assignedIndex === 0
            ? Theme.red
            : assignedIndex === 1
            ? Theme.blue
            : Theme.green;

        return (
          <Point key={`pt-${i}`} x={pt.x} y={pt.y} color={color} opacity={0.6} size={6} />
        );
      })}

      {/* 3. Draw Centroids (The Leaders) */}
      {centroids.map((c, i) => {
        const color = i === 0 ? Theme.red : i === 1 ? Theme.blue : Theme.green;
        return (
          <g key={`cent-${i}`}>
            {/* Draw an X or a Big Dot for Centroid */}
            <Point x={c.x} y={c.y} color={color} size={15} />
            <Point x={c.x} y={c.y} color="white" size={5} />
          </g>
        );
      })}
    </Mafs>
  );
};

KMeansVisual.propTypes = {
  params: PropTypes.shape({
    points: PropTypes.arrayOf(
      PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    ).isRequired,
    centroids: PropTypes.arrayOf(
      PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    ).isRequired,
    assignments: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default KMeansVisual;

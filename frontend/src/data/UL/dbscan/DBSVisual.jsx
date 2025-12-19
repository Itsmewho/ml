import { Mafs, Coordinates, Point, Theme, Circle } from 'mafs';
import PropTypes from 'prop-types';

const DBSCANVisual = ({ params }) => {
  const { points, status, currentIdx, epsilon } = params;
  // status: 0=Unvisited, 1=Visited/Noise, 2=Cluster A, 3=Cluster B

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-4, 4], y: [-4, 4] }}>
      <Coordinates.Cartesian />

      {/* Draw Search Circle around current point being processed */}
      {currentIdx !== -1 && (
        <Circle
          center={[points[currentIdx].x, points[currentIdx].y]}
          radius={epsilon}
          color={Theme.foreground}
          opacity={0.2}
        />
      )}

      {/* Draw Points */}
      {points.map((pt, i) => {
        // Color Logic
        let color = '#555'; // Unvisited (Grey)
        if (status[i] === 1) color = '#888'; // Noise (Light Grey)
        if (status[i] === 2) color = Theme.blue; // Cluster 1
        if (status[i] === 3) color = Theme.green; // Cluster 2 (if any)

        // Highlight current point
        const isCurrent = i === currentIdx;

        return (
          <Point
            key={i}
            x={pt.x}
            y={pt.y}
            color={isCurrent ? Theme.red : color}
            size={isCurrent ? 10 : 6}
          />
        );
      })}
    </Mafs>
  );
};

DBSCANVisual.propTypes = {
  params: PropTypes.shape({
    points: PropTypes.array.isRequired,
    status: PropTypes.array.isRequired,
    currentIdx: PropTypes.number.isRequired,
    epsilon: PropTypes.number.isRequired,
  }).isRequired,
};

export default DBSCANVisual;

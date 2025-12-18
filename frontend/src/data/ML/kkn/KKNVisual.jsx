import { Mafs, Coordinates, Point, Theme, Circle, Line } from 'mafs';
import PropTypes from 'prop-types';

// Static Data: A mix of Class 0 (Red) and Class 1 (Blue)
const TRAINING_DATA = [
  { x: -2, y: 1, label: 0 },
  { x: -2, y: 2, label: 0 },
  { x: -1, y: 1.5, label: 0 },
  { x: -1, y: -1, label: 0 },
  { x: 1, y: 1, label: 1 },
  { x: 2, y: 2, label: 1 },
  { x: 2, y: 0, label: 1 },
  { x: 3, y: -1, label: 1 },
  { x: 0, y: 2, label: 1 },
];

const KNNVisual = ({ params }) => {
  const { x, y, k } = params;

  // 1. Calculate Distances from our "Query Point" (x,y) to every data point
  const distances = TRAINING_DATA.map((pt, index) => {
    const dist = Math.sqrt(Math.pow(pt.x - x, 2) + Math.pow(pt.y - y, 2));
    return { ...pt, dist, id: index };
  });

  // 2. Sort by distance and slice the top K
  distances.sort((a, b) => a.dist - b.dist);
  const neighbors = distances.slice(0, k);

  // 3. Vote!
  const votes = { 0: 0, 1: 0 };
  neighbors.forEach((n) => votes[n.label]++);

  const winner = votes[1] > votes[0] ? 1 : 0;
  // If tie, default to 1 (or whatever logic)

  // 4. Determine Radius of the Kth neighbor (for drawing the circle)
  const radius = neighbors[neighbors.length - 1].dist;

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-4, 4], y: [-3, 4] }}>
      <Coordinates.Cartesian />

      {/* The "Search Radius" Circle */}
      <Circle center={[x, y]} radius={radius} color={Theme.foreground} opacity={0.1} />

      {/* Draw Lines to the K Neighbors */}
      {neighbors.map((n) => (
        <Line.Segment
          key={`line-${n.id}`}
          point1={[x, y]}
          point2={[n.x, n.y]}
          opacity={0.3}
          color={Theme.foreground}
        />
      ))}

      {/* Draw All Data Points */}
      {TRAINING_DATA.map((pt, i) => (
        <Point
          key={i}
          x={pt.x}
          y={pt.y}
          color={pt.label === 1 ? Theme.blue : Theme.red}
          opacity={0.5}
        />
      ))}

      {/* Highlight Neighbors (Make them brighter) */}
      {neighbors.map((n) => (
        <Point
          key={`neigh-${n.id}`}
          x={n.x}
          y={n.y}
          color={n.label === 1 ? Theme.blue : Theme.red}
        />
      ))}

      {/* The Query Point (The Player) */}
      {/* It takes the color of the Winner! */}
      <Point x={x} y={y} color={winner === 1 ? Theme.blue : Theme.red} size={12} />
    </Mafs>
  );
};

KNNVisual.propTypes = {
  params: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    k: PropTypes.number.isRequired,
  }).isRequired,
};

export default KNNVisual;

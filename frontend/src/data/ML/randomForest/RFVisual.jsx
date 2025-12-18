import { Mafs, Coordinates, Point, Theme, Polygon } from 'mafs';
import PropTypes from 'prop-types';

const RandomForestVisual = ({ params }) => {
  const { showTree1, showTree2, showTree3 } = params;

  // We simulate a grid of predictions (Resolution 20x20)
  // We will draw "pixels" for the decision boundary
  const PIXEL_SIZE = 0.5;
  const pixels = [];

  for (let x = -4; x <= 4; x += PIXEL_SIZE) {
    for (let y = -4; y <= 4; y += PIXEL_SIZE) {
      // --- THE VOTING BOOTH ---
      let votesForBlue = 0;
      let activeTrees = 0;

      // Tree 1: Checks Vertical Band (Is x between -2 and 2?)
      if (showTree1) {
        activeTrees++;
        if (x > -2 && x < 2) votesForBlue++;
      }

      // Tree 2: Checks Horizontal Band (Is y between -2 and 2?)
      if (showTree2) {
        activeTrees++;
        if (y > -2 && y < 2) votesForBlue++;
      }

      // Tree 3: Checks Diagonals (A diamond shape)
      if (showTree3) {
        activeTrees++;
        if (Math.abs(x) + Math.abs(y) < 3.5) votesForBlue++;
      }

      // --- THE CONSENSUS ---
      // If no trees active, show nothing.
      // Majority vote: if > 50% of active trees say Blue, it's Blue.
      let isBlue = false;
      if (activeTrees > 0) {
        isBlue = votesForBlue / activeTrees > 0.5;
      }

      // Only push pixel if we have a prediction to show
      if (activeTrees > 0) {
        pixels.push({ x, y, isBlue });
      }
    }
  }

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* Draw the "Decision Surface" (The combined brain) */}
      {pixels.map((p, i) => (
        <Polygon
          key={i}
          points={[
            [p.x, p.y],
            [p.x + PIXEL_SIZE, p.y],
            [p.x + PIXEL_SIZE, p.y + PIXEL_SIZE],
            [p.x, p.y + PIXEL_SIZE],
          ]}
          color={p.isBlue ? Theme.blue : Theme.red}
          strokeOpacity={0}
          fillOpacity={0.4}
        />
      ))}

      {/* The Actual Data (The "Truth" - A Circle/Donut) */}
      {/* Center Cluster (Blue) */}
      <Point x={0} y={0} color={Theme.blue} />
      <Point x={1} y={1} color={Theme.blue} />
      <Point x={-1} y={-1} color={Theme.blue} />
      <Point x={1} y={-1} color={Theme.blue} />
      <Point x={-1} y={1} color={Theme.blue} />

      {/* Outer Ring (Red) */}
      <Point x={3} y={3} color={Theme.red} />
      <Point x={-3} y={-3} color={Theme.red} />
      <Point x={3} y={-3} color={Theme.red} />
      <Point x={-3} y={3} color={Theme.red} />
      <Point x={0} y={4} color={Theme.red} />
      <Point x={4} y={0} color={Theme.red} />
    </Mafs>
  );
};

RandomForestVisual.propTypes = {
  params: PropTypes.shape({
    showTree1: PropTypes.bool.isRequired,
    showTree2: PropTypes.bool.isRequired,
    showTree3: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RandomForestVisual;

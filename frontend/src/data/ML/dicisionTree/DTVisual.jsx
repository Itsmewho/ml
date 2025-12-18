import { Mafs, Coordinates, Point, Theme, Line, Polygon } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded Data: 4 distinct clusters to make the rectangles obvious
const DATA = [
  // Top Left: Red
  { x: -2, y: 3, label: 0 },
  { x: -3, y: 2, label: 0 },
  { x: -2, y: 4, label: 0 },
  // Bottom Left: Blue
  { x: -2, y: -2, label: 1 },
  { x: -3, y: -3, label: 1 },
  { x: -1, y: -2, label: 1 },
  // Top Right: Blue
  { x: 2, y: 3, label: 1 },
  { x: 3, y: 2, label: 1 },
  { x: 2, y: 4, label: 1 },
  // Bottom Right: Red
  { x: 3, y: -3, label: 0 },
  { x: 2, y: -2, label: 0 },
  { x: 4, y: -3, label: 0 },
];

const DecisionTreeVisual = ({ params }) => {
  const { splitX, splitYLeft, splitYRight } = params;

  // Helper to determine region color based on majority vote
  // We check all points in a specific rectangle (minX, maxX, minY, maxY)
  const getRegionColor = (minX, maxX, minY, maxY) => {
    let redCount = 0;
    let blueCount = 0;

    DATA.forEach((pt) => {
      if (pt.x >= minX && pt.x < maxX && pt.y >= minY && pt.y < maxY) {
        if (pt.label === 0) redCount++;
        else blueCount++;
      }
    });

    if (redCount === 0 && blueCount === 0) return 'transparent'; // Empty region
    return redCount > blueCount ? 'rgba(239, 68, 68, 0.2)' : 'rgba(59, 130, 246, 0.2)';
  };

  // Define the 4 Rectangles based on the cuts
  // 1. Top Left
  const cTL = getRegionColor(-5, splitX, splitYLeft, 5);
  // 2. Bottom Left
  const cBL = getRegionColor(-5, splitX, -5, splitYLeft);
  // 3. Top Right
  const cTR = getRegionColor(splitX, 5, splitYRight, 5);
  // 4. Bottom Right
  const cBR = getRegionColor(splitX, 5, -5, splitYRight);

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* --- DRAW REGIONS (Background Colors) --- */}

      {/* Top Left Rect */}
      <Polygon
        points={[
          [-5, splitYLeft],
          [splitX, splitYLeft],
          [splitX, 5],
          [-5, 5],
        ]}
        color={cTL}
        strokeOpacity={0}
      />
      {/* Bottom Left Rect */}
      <Polygon
        points={[
          [-5, -5],
          [splitX, -5],
          [splitX, splitYLeft],
          [-5, splitYLeft],
        ]}
        color={cBL}
        strokeOpacity={0}
      />
      {/* Top Right Rect */}
      <Polygon
        points={[
          [splitX, splitYRight],
          [5, splitYRight],
          [5, 5],
          [splitX, 5],
        ]}
        color={cTR}
        strokeOpacity={0}
      />
      {/* Bottom Right Rect */}
      <Polygon
        points={[
          [splitX, -5],
          [5, -5],
          [5, splitYRight],
          [splitX, splitYRight],
        ]}
        color={cBR}
        strokeOpacity={0}
      />

      {/* --- DRAW SPLIT LINES --- */}

      {/* Root Split (Vertical) */}
      <Line.Segment
        point1={[splitX, -5]}
        point2={[splitX, 5]}
        color={Theme.foreground}
        weight={3}
      />

      {/* Left Branch Split (Horizontal, only on left side) */}
      <Line.Segment
        point1={[-5, splitYLeft]}
        point2={[splitX, splitYLeft]}
        color={Theme.foreground}
        style="dashed"
      />

      {/* Right Branch Split (Horizontal, only on right side) */}
      <Line.Segment
        point1={[splitX, splitYRight]}
        point2={[5, splitYRight]}
        color={Theme.foreground}
        style="dashed"
      />

      {/* --- DRAW DATA POINTS --- */}
      {DATA.map((pt, i) => (
        <Point
          key={i}
          x={pt.x}
          y={pt.y}
          color={pt.label === 1 ? Theme.blue : Theme.red}
        />
      ))}
    </Mafs>
  );
};

DecisionTreeVisual.propTypes = {
  params: PropTypes.shape({
    splitX: PropTypes.number.isRequired,
    splitYLeft: PropTypes.number.isRequired,
    splitYRight: PropTypes.number.isRequired,
  }).isRequired,
};

export default DecisionTreeVisual;

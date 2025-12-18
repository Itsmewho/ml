import { Mafs, Coordinates, Plot, Point, Theme } from 'mafs';
import PropTypes from 'prop-types';

// Hardcoded Data: Linearly separable
const DATA = [
  { x: -2, y: 3, label: 1 },
  { x: -1, y: 4, label: 1 },
  { x: 0, y: 2, label: 1 },
  { x: -2, y: 1, label: 1 },

  { x: 2, y: -1, label: -1 },
  { x: 3, y: -2, label: -1 },
  { x: 1, y: -3, label: -1 },
  { x: 4, y: 0, label: -1 },
];

const SVMVisual = ({ params }) => {
  const { angle, intercept, margin } = params;

  // Convert Angle to Slope (m)
  // Angle is in degrees.
  const rad = (angle * Math.PI) / 180;
  const slope = Math.tan(rad);

  // Define the Decision Boundary Line Function: y = mx + b
  const decisionLine = (x) => slope * x + intercept;

  // Define the Margin Lines
  // Vertical distance offset approx = margin / cos(theta)
  // Simplified for visual: just adding offset to Y-intercept
  const offset = margin;
  const upperMargin = (x) => slope * x + intercept + offset;
  const lowerMargin = (x) => slope * x + intercept - offset;

  // Collision Detection
  // A point is "Inside the Street" if it falls between the two margin lines
  const checkCollision = (pt) => {
    const yPred = slope * pt.x + intercept;
    // Check vertical distance
    const dist = pt.y - yPred;
    return Math.abs(dist) < offset;
  };

  return (
    <Mafs zoom={true} pan={true} height={400} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />

      {/* 1. The Street (Shaded Area) */}
      {/* We draw many small lines or a polygon to simulate shading if needed, 
          but simpler is just plotting the boundary lines thick */}

      {/* Upper Margin */}
      <Plot.OfX y={upperMargin} style="dashed" color={Theme.foreground} opacity={0.3} />

      {/* Lower Margin */}
      <Plot.OfX y={lowerMargin} style="dashed" color={Theme.foreground} opacity={0.3} />

      {/* The Center Line (Decision Boundary) */}
      <Plot.OfX y={decisionLine} color={Theme.purple} weight={3} />

      {/* 2. The Data Points */}
      {DATA.map((pt, i) => {
        const isCollision = checkCollision(pt);
        return (
          <Point
            key={i}
            x={pt.x}
            y={pt.y}
            // If collision, show Orange Warning color. Else Class color.
            color={isCollision ? Theme.orange : pt.label === 1 ? Theme.blue : Theme.red}
            // If collision, make it bigger to scream "ERROR"
            size={isCollision ? 15 : 10}
            opacity={1}
          />
        );
      })}
    </Mafs>
  );
};

SVMVisual.propTypes = {
  params: PropTypes.shape({
    angle: PropTypes.number.isRequired,
    intercept: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
  }).isRequired,
};

export default SVMVisual;

import { Mafs, Coordinates, Plot, Point, Theme, Line } from 'mafs';
import PropTypes from 'prop-types';

const EulerVisual = ({ params }) => {
  const { stepSize, steps } = params;

  // 1. The Differential Equation: dy/dx = y
  // (Meaning: The slope is equal to the current height)
  // Starting condition: y(0) = 1

  // 2. Calculate Exact Solution (y = e^x) for comparison
  const exactFunc = (x) => Math.exp(x);

  // 3. Calculate Euler's Method Steps
  const eulerPoints = [];
  let currentX = 0;
  let currentY = 1; // Start at (0, 1)

  eulerPoints.push([currentX, currentY]);

  for (let i = 0; i < steps; i++) {
    const slope = currentY; // In this specific equation, slope = y

    const nextX = currentX + stepSize;
    const nextY = currentY + stepSize * slope;

    eulerPoints.push([nextX, nextY]);

    currentX = nextX;
    currentY = nextY;
  }

  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-0.5, 4], y: [-1, 20] }}>
      <Coordinates.Cartesian />

      {/* The True Solution (Blue Curve) */}
      <Plot.OfX y={exactFunc} color={Theme.blue} weight={3} opacity={0.5} />

      {/* The Euler Approximation (Red Segments) */}
      {eulerPoints.map((pt, i) => {
        if (i === 0) return null;
        const prev = eulerPoints[i - 1];
        return (
          <g key={i}>
            {/* The Straight Line Step */}
            <Line.Segment point1={prev} point2={pt} color={Theme.red} weight={3} />
            {/* The Dot at the calculated point */}
            <Point x={pt[0]} y={pt[1]} color={Theme.red} size={8} />
          </g>
        );
      })}

      {/* Starting Point */}
      <Point x={0} y={1} color={Theme.blue} />
    </Mafs>
  );
};

EulerVisual.propTypes = {
  params: PropTypes.shape({
    stepSize: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
  }).isRequired,
};

export default EulerVisual;

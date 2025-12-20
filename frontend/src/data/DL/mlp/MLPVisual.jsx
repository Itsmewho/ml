import { Mafs, Coordinates, Point, Theme, Plot } from 'mafs';
import PropTypes from 'prop-types';

// The XOR Problem Data
const DATA = [
  { x1: 0, x2: 0, label: 0 },
  { x1: 1, x2: 1, label: 0 },
  { x1: 0, x2: 1, label: 1 },
  { x1: 1, x2: 0, label: 1 },
];

const MLPVisual = ({ params }) => {
  const { w1_1, w1_2, b1, w2_1, w2_2, b2, wOut1, wOut2, bOut } = params;

  // Sigmoid Activation
  const sigmoid = (z) => 1 / (1 + Math.exp(-z));

  // 1. Calculate Hidden Layer values (The Transformation)
  const getHidden = (x1, x2) => {
    // Hidden Neuron 1
    const h1 = sigmoid(w1_1 * x1 + w1_2 * x2 + b1);
    // Hidden Neuron 2
    const h2 = sigmoid(w2_1 * x1 + w2_2 * x2 + b2);
    return { h1, h2 };
  };

  // 2. Output Decision Boundary Line (in Hidden Space)
  // Equation: wOut1*h1 + wOut2*h2 + bOut = 0
  const outputBoundary = (h1) => {
    if (Math.abs(wOut2) < 0.01) return null;
    return (-wOut1 * h1 - bOut) / wOut2;
  };

  return (
    <div
      style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {/* GRAPH 1: Input Space (The Problem) */}
      <div style={{ width: '250px' }}>
        <h5 style={{ textAlign: 'center', margin: '5px', color: '#888' }}>
          1. Input Space
        </h5>
        <Mafs
          zoom={false}
          pan={false}
          height={250}
          viewBox={{ x: [-0.5, 1.5], y: [-0.5, 1.5] }}
        >
          <Coordinates.Cartesian />
          {DATA.map((pt, i) => (
            <Point
              key={i}
              x={pt.x1}
              y={pt.x2}
              color={pt.label === 1 ? Theme.blue : Theme.red}
              size={8}
            />
          ))}
        </Mafs>
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
          XOR pattern (Impossible for 1 line)
        </p>
      </div>

      {/* ARROW */}
      <div
        style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#444' }}
      >
        →
      </div>

      {/* GRAPH 2: Hidden Space (The Solution) */}
      <div style={{ width: '250px' }}>
        <h5 style={{ textAlign: 'center', margin: '5px', color: Theme.purple }}>
          2. Hidden Space
        </h5>
        <Mafs zoom={false} pan={false} height={250} viewBox={{ x: [0, 1], y: [0, 1] }}>
          <Coordinates.Cartesian />

          {/* Draw the Final Decision Line */}
          <Plot.OfX y={outputBoundary} color={Theme.purple} weight={3} />

          {/* Draw the Transformed Points */}
          {DATA.map((pt, i) => {
            const { h1, h2 } = getHidden(pt.x1, pt.x2);
            return (
              <Point
                key={i}
                x={h1}
                y={h2}
                color={pt.label === 1 ? Theme.blue : Theme.red}
              />
            );
          })}
        </Mafs>
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
          Points move to corners (Solvable!)
        </p>
      </div>
    </div>
  );
};

MLPVisual.propTypes = {
  params: PropTypes.object.isRequired,
};

export default MLPVisual;

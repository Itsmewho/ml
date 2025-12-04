import { Mafs, Coordinates, Plot } from 'mafs';

const mishFunc = (x) => {
  // Math.log(1 + Math.exp(x)) is also known as "Softplus"
  const softplus = Math.log(1 + Math.exp(x));
  return x * Math.tanh(softplus);
};

// Mish usually has no parameters!
const MishVisual = () => {
  return (
    <Mafs zoom={true} pan={true} height={550} viewBox={{ x: [-4, 4], y: [-2, 3] }}>
      <Coordinates.Cartesian />

      <Plot.OfX
        y={mishFunc}
        color="#00C49F" // A nice teal/green color
        weight={3}
      />
    </Mafs>
  );
};

export default MishVisual;

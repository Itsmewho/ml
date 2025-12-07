const EulerExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Eulers Method</h3>
      <p className="ff-sans fs-300 grey margintop">
        The grandfather of computational simulation.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It solves complex curves by breaking them into tiny straight lines based on the
        slope at that moment.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>In Physics:</strong> Used to simulate physics engines.
        </li>
        <li>
          <strong>In AI (Gradient Descent):</strong> Take a step in the direction of the
          slope.
        </li>
        <li>
          <strong>In AI (ResNets):</strong> Specifically model the step ($f(x)$) added to
          the previous state ($x$). This equation $y_(new) = y_(old) + step$ is the ResNet
          Skip Connection!
        </li>
      </ul>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.2rem',
        }}
      >
        y<sub>new</sub> = y<sub>old</sub> + (step &middot; slope)
      </div>
    </div>
  );
};

export default EulerExplanation;

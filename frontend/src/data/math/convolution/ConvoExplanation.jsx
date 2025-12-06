const ConvolutionExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Convolution</h3>
      <p className="ff-sans fs-300 grey margintop">
        The core operation of Computer Vision (CNNs).
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Think of the <strong>Kernel</strong> (Red) as a Pattern Finder. It slides over the{' '}
        <strong>Input</strong> (Blue).
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          At each step, we calculate the <strong>Dot Product</strong> (multiply & sum).
        </li>
        <li>
          If the Input matches the Kernels pattern, the Output is <strong>High</strong>.
        </li>
        <li>If they dont match, the Output is Low.</li>
      </ul>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.1rem',
        }}
      >
        (f * g)[n] = &Sigma; f[m] &middot; g[n - m]
      </div>
    </div>
  );
};

export default ConvolutionExplanation;

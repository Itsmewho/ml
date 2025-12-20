const MaxPoolingExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Max Pooling</h3>
      <p className="ff-sans fs-300 grey margintop">
        The Zoom Out button of Deep Learning.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Convolutional Neural Networks (CNNs) generate huge amounts of data. Max Pooling
        reduces this size by looking at small grids (like 2x2) and keeping only the{' '}
        <strong>Strongest Signal</strong> (Max Value).
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>Compression:</strong> It makes the image smaller (less computation).
        </li>
        <li>
          <strong>Invariance:</strong> If a feature (like an eye) moves slightly to the
          left, the Max Pool block still captures it. This helps the AI recognize objects
          even if they arent perfectly centered.
        </li>
      </ul>
    </div>
  );
};

export default MaxPoolingExplanation;

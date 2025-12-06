const CorrelationExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Cross-Correlation</h3>
      <p className="ff-sans fs-300 grey margintop">
        Often called Convolution in AI libraries (TensorFlow/PyTorch), but mathematically
        it is <strong>Correlation</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        It measures <strong>Similarity</strong>. It slides the Filter (Kernel) over the
        Input. When the shapes align perfectly, the result is maximized.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        This is exactly how you Find Waldo or find a face in a crowd. You slide a Face
        Filter over the image until it matches.
      </p>

      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.1rem',
        }}
      >
        (f &#9734; g)[n] = &Sigma; f[i] &middot; g[i + n]
      </div>
    </div>
  );
};

export default CorrelationExplanation;

const MishExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Mish Activation</h3>
      <p className="ff-sans fs-300 grey margintop">
        A Self Regularized Non-Monotonic function.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Like Swish, it is smooth and dips below zero. It became famous for its use in{' '}
        <strong>YOLOv4</strong> (a very fast computer vision AI), where it beat other
        functions by a significant margin.
      </p>

      <div
        style={{
          margin: '1rem 0',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        f(x) = x &middot; tanh(ln(1 + e<sup>x</sup>))
      </div>
    </div>
  );
};

export default MishExplanation;

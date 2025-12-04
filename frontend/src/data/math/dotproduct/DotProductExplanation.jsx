const DotProductExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Dot Product</h3>
      <p className="ff-sans fs-300 grey margintop">
        The measure of <strong>Similarity</strong>.
      </p>
      <ul className="ff-sans fs-300 grey">
        <li>
          If vectors point in the <strong>same</strong> direction, the result is large
          (positive).
        </li>
        <li>
          If they are <strong>perpendicular</strong> (90°), the result is{' '}
          <strong>Zero</strong>.
        </li>
        <li>
          If they point in <strong>opposite</strong> directions, the result is negative.
        </li>
      </ul>
      <p className="ff-sans fs-300 grey margintop">
        In Neural Networks, this calculates how similar an Input is to a Weight.
      </p>

      <div
        style={{
          margin: '1rem 0',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '1.3rem',
          textAlign: 'center',
        }}
      >
        A &middot; B = (x<sub>1</sub> * x<sub>2</sub>) + (y<sub>1</sub> * y<sub>2</sub>)
      </div>
    </div>
  );
};

export default DotProductExplanation;

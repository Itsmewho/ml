const KNNExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">K-Nearest Neighbors</h3>
      <p className="ff-sans fs-300 grey margintop">
        A <strong>Lazy Learner</strong> algorithm. It doesnt learn a formula (like Linear
        Regression). It just memorizes the data.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        To classify a new point, it asks: <strong>Who are my K closest neighbors?</strong>
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          If <strong>K=1</strong>, it just copies the nearest dot (very jagged boundary).
        </li>
        <li>
          If <strong>K=9</strong>, it takes the average of everyone (very smooth).
        </li>
      </ul>
    </div>
  );
};

export default KNNExplanation;

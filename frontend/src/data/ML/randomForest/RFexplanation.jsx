const RandomForestExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Random Forest</h3>
      <p className="ff-sans fs-300 grey margintop">
        The definitive <strong>Ensemble</strong> algorithm. It combines the predictions of
        many simple Decision Trees.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>The Logic:</strong>
        <br />A single tree might make mistakes (like drawing a simple square when the
        data is a circle). But if you combine a vertical tree, a horizontal tree, and a
        diagonal tree, their <strong>Average Vote</strong> creates a much smoother, more
        accurate shape.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        This is why Random Forests rarely Overfit. The individual mistakes of one tree are
        cancelled out by the wisdom of the others.
      </p>
    </div>
  );
};

export default RandomForestExplanation;

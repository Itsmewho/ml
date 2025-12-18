const SVMExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Support Vector Machine</h3>
      <p className="ff-sans fs-300 grey margintop">
        The goal of SVM is not just to separate the data, but to separate it with the{' '}
        <strong>Widest Possible Margin</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Imagine the line is a street. You want the street to be as wide as possible
        without hitting any houses (data points).
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Support Vectors:</strong> The data points that touch the edge of the
        street. They are the pillars holding the margin open.
      </p>
    </div>
  );
};

export default SVMExplanation;

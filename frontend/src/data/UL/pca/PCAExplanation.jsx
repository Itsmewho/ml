const PCAExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Principal Component Analysis</h3>
      <p className="ff-sans fs-300 grey margintop">
        The ultimate tool for <strong>Dimensionality Reduction</strong>.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Real-world data often has 1000s of variables (Dimensions). PCA squashes them down
        to just 2 or 3 Principal Components while keeping the data distinct.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>How?</strong> It finds the axis where the data is most spread out (Max
        Variance) and projects everything onto that axis. This preserves the story of the
        data while throwing away the noise.
      </p>
    </div>
  );
};

export default PCAExplanation;

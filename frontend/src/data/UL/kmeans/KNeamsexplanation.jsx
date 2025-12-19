const KMeansExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">K-Means Clustering</h3>
      <p className="ff-sans fs-300 grey margintop">
        The most popular <strong>Unsupervised Learning</strong> algorithm. It finds groups
        (clusters) in messy data.
      </p>

      <div
        style={{
          marginTop: '1rem',
          borderLeft: '3px solid var(--clr-primary)',
          paddingLeft: '10px',
        }}
      >
        <p className="ff-sans fs-300 grey">
          <strong>The 2-Step Dance:</strong>
          <br />
          1. <strong>Assignment:</strong> Everyone runs to the nearest Team Leader
          (Centroid).
          <br />
          2. <strong>Update:</strong> The Team Leader moves to the center of the group.
          <br />
        </p>
      </div>

      <p className="ff-sans fs-300 grey margintop">
        You repeat this until the leaders stop moving. It is simple, fast, and used
        everywhere from organizing library books to compressing images.
      </p>
    </div>
  );
};

export default KMeansExplanation;

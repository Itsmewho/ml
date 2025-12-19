const DBSCANExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">DBSCAN</h3>
      <p className="ff-sans fs-300 grey margintop">
        Density-Based Spatial Clustering of Applications with Noise. (A mouthful!)
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Unlike K-Means, it doesnt need to know K (number of clusters) in advance. It finds
        them naturally by connecting neighbors.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>Reach (Epsilon):</strong> How far can I reach to find a friend?
        </li>
        <li>
          <strong>Noise:</strong> If a point has no friends nearby, it is marked as Noise
          (ignored).
        </li>
      </ul>
    </div>
  );
};

export default DBSCANExplanation;

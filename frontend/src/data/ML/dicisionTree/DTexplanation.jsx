const DecisionTreeExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Decision Tree</h3>
      <p className="ff-sans fs-300 grey margintop">
        A logic-based classifier. It slices the world into rectangles using simple Yes/No
        questions.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>Step 1 (Root):</strong> Is X &gt; 0? (Divides Left/Right)
        </li>
        <li>
          <strong>Step 2 (Leaves):</strong> Is Y &gt; 2? (Divides Top/Bottom)
        </li>
      </ul>
      <p className="ff-sans fs-300 grey margintop">
        Unlike SVMs, Decision Trees dont draw diagonal lines. They draw{' '}
        <strong>Axis-Aligned Boundaries</strong>. This makes them very interpretable (I
        rejected the loan because Income was &lt; 50k).
      </p>
    </div>
  );
};

export default DecisionTreeExplanation;

const GridWorldExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Reinforcement Learning</h3>
      <p className="ff-sans fs-300 grey margintop">How agents learn from experience.</p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>Agent:</strong> The Robot.
        </li>
        <li>
          <strong>Environment:</strong> The Grid.
        </li>
        <li>
          <strong>State (S):</strong> Where am I? (e.g., Row 0, Col 0).
        </li>
        <li>
          <strong>Action (A):</strong> What do I do? (Up, Down, Left, Right).
        </li>
        <li>
          <strong>Reward (R):</strong> What happened? (+100 for Gold, -100 for Fire).
        </li>
      </ul>
      <p className="ff-sans fs-300 grey margintop">
        The goal of RL is to find a <strong>Policy</strong>: a cheat sheet that tells you
        exactly which move to make in every possible square to maximize your score.
      </p>
    </div>
  );
};

export default GridWorldExplanation;

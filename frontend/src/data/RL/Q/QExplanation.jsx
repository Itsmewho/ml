const QLearningExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Q-Learning</h3>
      <p className="ff-sans fs-300 grey margintop">The Cheat Sheet Algorithm.</p>
      <p className="ff-sans fs-300 grey margintop">
        The agent maintains a <strong>Q-Table</strong>. It remembers the Quality (Q) of
        every action in every state. Once the Q-Table is filled, the agent doesnt need to
        think anymore—it just looks up the best move and wins instantly.
      </p>
    </div>
  );
};
export default QLearningExplanation;

const BanditExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Exploration vs Exploitation</h3>
      <p className="ff-sans fs-300 grey margintop">
        The fundamental problem of life and AI.
      </p>
      <ul className="ff-sans fs-300 grey" style={{ paddingLeft: '1.2rem' }}>
        <li>
          <strong>Exploration:</strong> Trying a new restaurant. Risk: It might be bad.
          Reward: It might be the best ever.
        </li>
        <li>
          <strong>Exploitation:</strong> Going to your favorite restaurant. Risk: You miss
          out on new things. Reward: Guaranteed decent meal.
        </li>
      </ul>
    </div>
  );
};
export default BanditExplanation;

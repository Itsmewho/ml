const ShannonExplanation = () => {
  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">Claude Shannon</h3>
      <p className="ff-sans fs-300 grey margintop">
        The Father of Information Theory. He proved that language is not random; it has{' '}
        <strong>Entropy</strong> (predictability).
      </p>
      <p className="ff-sans fs-300 grey margintop">
        <strong>Level 0:</strong> Complete chaos.
        <br />
        <strong>Level 1:</strong> Using the fact that E is common.
        <br />
        <strong>Level 2:</strong> Using <strong>Markov Chains</strong>. If I see Q, the
        next letter is almost certainly U.
      </p>
      <p className="ff-sans fs-300 grey margintop">
        Modern AI (like ChatGPT) is essentially this same concept, just taken to Level
        1,000,000 (looking at the previous 4,000 words instead of just 1 letter).
      </p>
    </div>
  );
};

export default ShannonExplanation;

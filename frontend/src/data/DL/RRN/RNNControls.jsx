import PropTypes from 'prop-types';

const RNNControls = ({ params, setParams }) => {
  // Simple Logic Dictionary
  // Each word has a "Sentiment Score"
  const WORD_SCORES = {
    I: 0,
    love: 1.5,
    hate: -1.5,
    food: 0.2,
    movie: 0.2,
    not: -2.0, // Special "Flipper"
    very: 0.5, // Amplifier
  };

  const nextStep = () => {
    const { sequence, currentStep, hiddenStates } = params;

    // If finished, reset
    if (currentStep >= sequence.length - 1) {
      setParams((prev) => ({ ...prev, currentStep: 0, hiddenStates: [0] }));
      return;
    }

    const nextIdx = currentStep + 1;
    const word = sequence[nextIdx];

    // --- RNN LOGIC ---
    // New State = Old State + Input Info
    let prevH = hiddenStates[currentStep];
    let wordVal = WORD_SCORES[word] || 0;

    let newH = 0;

    // Special logic for "not" (Negation)
    if (word === 'not') {
      newH = prevH * -1; // Flip the sentiment!
    } else {
      // Standard accumulation (with some decay/forgetting)
      newH = prevH + wordVal;
    }

    // Clip result between -2 and 2 for visual sanity
    newH = Math.max(-2, Math.min(2, newH));

    const newHiddenStates = [...hiddenStates];
    newHiddenStates[nextIdx] = newH;

    setParams((prev) => ({
      ...prev,
      currentStep: nextIdx,
      hiddenStates: newHiddenStates,
    }));
  };

  const setSentence = (newSeq) => {
    setParams({
      sequence: newSeq,
      currentStep: 0,
      hiddenStates: [0], // Start neutral
    });
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <button
          onClick={nextStep}
          style={{
            padding: '10px 30px',
            fontSize: '1.1rem',
            background: 'var(--clr-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {params.currentStep >= params.sequence.length - 1 ? 'Reset' : 'Read Next Word'}
        </button>
      </div>

      <hr style={{ borderColor: '#333', opacity: 0.3, marginBottom: '1.5rem' }} />

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setSentence(['I', 'love', 'this', 'movie'])}
          style={{
            padding: '5px 10px',
            border: '1px solid #666',
            background: 'transparent',
            color: '#aaa',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          I love this movie
        </button>

        <button
          onClick={() => setSentence(['I', 'hate', 'this', 'food'])}
          style={{
            padding: '5px 10px',
            border: '1px solid #666',
            background: 'transparent',
            color: '#aaa',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          I hate this food
        </button>

        <button
          onClick={() => setSentence(['I', 'do', 'not', 'love', 'it'])}
          style={{
            padding: '5px 10px',
            border: '1px solid #666',
            background: 'transparent',
            color: '#aaa',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          I do NOT love it
        </button>
      </div>

      <p
        style={{
          marginTop: '15px',
          fontSize: '0.9rem',
          color: '#666',
          textAlign: 'center',
        }}
      >
        Watch what happens with NOT. In an RNN, the word not can look at the previous
        memory (love = Positive) and flip it to Negative.
      </p>
    </div>
  );
};

RNNControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default RNNControls;

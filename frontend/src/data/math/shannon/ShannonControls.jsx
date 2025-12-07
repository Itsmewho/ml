import PropTypes from 'prop-types';

const ShannonControls = ({ params, setParams }) => {
  // --- LOGIC DATA ---
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

  // Rough frequency of letters in English (E is common, Z is rare)
  const FREQ_STRING =
    'EEEEEEEEEEEETAAAAAAAAOOOOOOOIIIIIIINNNNNNSSSSSSRRRRRRHHHHHLLLLDDDCUUUMPFGWYBVKXJQZ ';

  // Simple Bigram Map (What comes after a letter?)
  const BIGRAMS = {
    ' ': 'TAIWOB', // Words often start with T, A, I...
    T: 'HHOE', // TH, THE, TO
    H: 'EA', // HE, HA
    E: ' RSND', // ER, ES, EN, ED, E_
    Q: 'U', // QU
    A: 'NSTR',
    N: 'DG T',
    D: ' E',
    // Fallback for others: just use FREQ_STRING
  };

  const generate = (lvl) => {
    let result = '';
    let length = 40; // Generate 40 chars
    let lastChar = ' ';

    for (let i = 0; i < length; i++) {
      let nextChar = '';

      if (lvl === 0) {
        // Pure Random
        nextChar = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      } else if (lvl === 1) {
        // Frequency Based
        nextChar = FREQ_STRING[Math.floor(Math.random() * FREQ_STRING.length)];
      } else {
        // Level 2: Bigrams (Markov)
        // Look at last char. Do we have rules for it?
        const options = BIGRAMS[lastChar] || FREQ_STRING;
        nextChar = options[Math.floor(Math.random() * options.length)];
      }

      result += nextChar;
      lastChar = nextChar;
    }

    setParams({ text: result, level: lvl });
  };

  return (
    <div className="controls-content">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={() => generate(0)}
          style={{
            padding: '10px',
            border: '1px solid #666',
            background: params.level === 0 ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Level 0: Zero Order (Random)
        </button>
        <p style={{ margin: '-5px 0 10px 0', fontSize: '0.8rem', color: '#666' }}>
          XFOML RXKHJFFJUZ LPW (Gibberish)
        </p>

        <button
          onClick={() => generate(1)}
          style={{
            padding: '10px',
            border: '1px solid #666',
            background: params.level === 1 ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Level 1: First Order (Frequency)
        </button>
        <p style={{ margin: '-5px 0 10px 0', fontSize: '0.8rem', color: '#666' }}>
          OCRO HLI RGWR NMIEL (Looks pronounceable)
        </p>

        <button
          onClick={() => generate(2)}
          style={{
            padding: '10px',
            border: '1px solid #666',
            background: params.level === 2 ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Level 2: Second Order (Markov)
        </button>
        <p style={{ margin: '-5px 0 10px 0', fontSize: '0.8rem', color: '#666' }}>
          THE IN AND THER (Looks like words)
        </p>
      </div>
    </div>
  );
};

ShannonControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default ShannonControls;

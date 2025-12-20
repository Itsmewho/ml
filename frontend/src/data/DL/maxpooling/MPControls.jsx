import PropTypes from 'prop-types';

const MaxPoolingControls = ({ setParams }) => {
  const randomize = () => {
    // Generate 16 random numbers between 0 and 9
    const newInput = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10));
    setParams({ input: newInput });
  };

  return (
    <div className="controls-content">
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <button
          onClick={randomize}
          style={{
            padding: '10px 30px',
            background: 'var(--clr-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          New Random Image
        </button>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        <strong>Look at the colors:</strong>
        <br />
        Max Pooling splits the image into 2x2 regions (Red, Blue, Green, Orange).
        <br />
        It picks the <strong>Largest Number</strong> from each region and discards the
        rest.
      </p>

      <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>
        This reduces the data size by 75% (from 16 pixels to 4) while keeping the most
        important features.
      </div>
    </div>
  );
};

MaxPoolingControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default MaxPoolingControls;

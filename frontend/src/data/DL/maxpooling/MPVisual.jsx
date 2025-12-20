import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const MaxPoolingVisual = ({ params }) => {
  const { input } = params;

  // Input is a flat array of 16 numbers (4x4)
  // We want to pool it into 4 numbers (2x2)

  // Helper to get 2x2 block
  const getBlock = (row, col) => {
    // Top-left index of the block
    const idx = row * 4 + col;
    // Return indices of the 4 cells in this 2x2 block
    return [idx, idx + 1, idx + 4, idx + 5];
  };

  const blocks = [
    getBlock(0, 0), // Top Left Block
    getBlock(0, 2), // Top Right Block
    getBlock(2, 0), // Bottom Left Block
    getBlock(2, 2), // Bottom Right Block
  ];

  // Calculate Max for each block
  const outputs = blocks.map((indices) => {
    const values = indices.map((i) => input[i]);
    return Math.max(...values);
  });

  // Colors for the 4 regions
  const colors = [Theme.red, Theme.blue, Theme.green, Theme.orange];

  // --- Drawing Helpers ---
  const BOX = 40;
  const GAP = 5;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px',
        height: '300px',
      }}
    >
      {/* 1. INPUT GRID (4x4) */}
      <div>
        <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Input (4x4)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: GAP }}>
          {input.map((val, i) => {
            // Determine which block this cell belongs to
            const blockIndex = blocks.findIndex((indices) => indices.includes(i));
            const color = colors[blockIndex];
            const isWinner = val === outputs[blockIndex];

            return (
              <div
                key={i}
                style={{
                  width: BOX,
                  height: BOX,
                  border: `2px solid ${color}`,
                  background: isWinner ? color : 'transparent',
                  color: isWinner ? 'white' : color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  opacity: isWinner ? 1 : 0.5,
                }}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>

      {/* ARROW */}
      <div style={{ fontSize: '2rem', color: '#666' }}>→</div>

      {/* 2. OUTPUT GRID (2x2) */}
      <div>
        <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Output (2x2)</h4>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: GAP * 2 }}
        >
          {outputs.map((val, i) => (
            <div
              key={i}
              style={{
                width: BOX * 2 + GAP,
                height: BOX * 2 + GAP, // Scaled to look "condensed"
                background: colors[i],
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                borderRadius: '8px',
                fontSize: '1.5rem',
              }}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MaxPoolingVisual.propTypes = {
  params: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default MaxPoolingVisual;

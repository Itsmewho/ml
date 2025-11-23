import PropTypes from 'prop-types';

const FundamentalsWindow = ({ topicId }) => {
  return (
    <div style={{ color: '#ccc' }}>
      <h3>Fundamentals & Logic</h3>
      <p>
        Adjust parameters for: <strong>{topicId}</strong>
      </p>
      {/* Placeholder for future sliders/inputs */}
      <div style={{ padding: '10px', border: '1px dashed #555' }}>
        Control Panel Placeholder
      </div>
    </div>
  );
};

FundamentalsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
};

export default FundamentalsWindow;

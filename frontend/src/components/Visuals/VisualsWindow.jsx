import PropTypes from 'prop-types';

const VisualsWindow = ({ topicId }) => {
  return (
    <div style={{ width: '100%', height: '100%', color: 'white' }}>
      <h2>Visuals Window</h2>
      <p>Current Topic: {topicId}</p>
      <div
        style={{
          width: '100%',
          height: '200px',
          background: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        [ Graph for {topicId} will go here ]
      </div>
    </div>
  );
};

VisualsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
};

export default VisualsWindow;

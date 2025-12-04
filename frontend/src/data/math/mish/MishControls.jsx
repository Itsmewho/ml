const MishControls = () => {
  return (
    <div className="controls-content">
      <p style={{ color: '#666' }}>
        <strong>Mish is parameter-free.</strong>
      </p>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Unlike Swish or PReLU, standard Mish has no hyper-parameter to tune. It is a fixed
        curve that outperformed Swish in the YOLOv4 object detection model.
      </p>
    </div>
  );
};

export default MishControls;

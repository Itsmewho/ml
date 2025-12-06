import PropTypes from 'prop-types';

const LossExplanation = ({ params }) => {
  // Receiving params to know which text to show
  const { type } = params;

  return (
    <div className="explanation-content">
      <h3 className="ff-serif fs-400 upper lineheight">
        {type === 'mse' && 'Mean Squared Error (L2)'}
        {type === 'mae' && 'Mean Absolute Error (L1)'}
        {type === 'huberloss' && 'Huber Loss'}
      </h3>

      <div className="ff-sans fs-300 grey margintop">
        {type === 'mse' && (
          <>
            <p>
              The standard loss function. It squares the error, which means{' '}
              <strong>large errors are punished heavily</strong> (outliers).
            </p>
            <p>
              Because it is a smooth curve (parabola), it works great with Gradient
              Descent.
            </p>
          </>
        )}
        {type === 'mae' && (
          <>
            <p>The absolute difference. It is linear (V-shape).</p>
            <p>
              Unlike MSE, it is <strong>Robust to Outliers</strong>. If you have crazy bad
              data points, MAE doesn&aapos;t panic as much as MSE.
            </p>
          </>
        )}
        {type === 'huberloss' && (
          <>
            <p>The &apos;Best of Both Worlds&apos;.</p>
            <p>
              It behaves like <strong>MSE</strong> near 0 (for precise training) but
              switches to <strong>MAE</strong> for large errors (to ignore outliers).
            </p>
          </>
        )}
      </div>

      {/* Formula Display */}
      <div
        style={{
          margin: '1.5rem 0',
          textAlign: 'center',
          fontSize: '1.3rem',
        }}
      >
        {type === 'mse' && (
          <span>
            Loss = x<sup>2</sup>
          </span>
        )}
        {type === 'mae' && <span>Loss = |x|</span>}
        {type === 'huberloss' && <span>Quadratic &harr; Linear</span>}
      </div>
    </div>
  );
};

LossExplanation.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default LossExplanation;

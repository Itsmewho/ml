import { Theme } from 'mafs';
import PropTypes from 'prop-types';

const BayesVisual = ({ params }) => {
  const { prevalence, sensitivity, specificity } = params;

  // Constants
  const W = 300; // Width of square
  const H = 300; // Height of square

  // 1. Calculate Widths based on Prevalence (Prior)
  // Sick People width
  const wSick = (prevalence / 100) * W;
  // Healthy People width
  const wHealthy = W - wSick;

  // 2. Calculate Heights based on Test Accuracy
  // True Positive Height (Sensitivity) inside Sick column
  const hTP = (sensitivity / 100) * H;
  const hFN = H - hTP; // False Negative

  // True Negative Height (Specificity) inside Healthy column
  // Note: False Positive is the inverse!
  const hTN = (specificity / 100) * H;
  const hFP = H - hTN; // False Positive

  // 3. Calculate Final Probability: P(Sick | Positive)
  // Formula: TP / (TP + FP)
  // We use Areas instead of raw counts for the visual
  const areaTP = wSick * hTP;
  const areaFP = wHealthy * hFP;
  const totalPositiveArea = areaTP + areaFP;

  const probSickGivenPositive =
    totalPositiveArea === 0 ? 0 : (areaTP / totalPositiveArea) * 100;

  return (
    <div
      style={{
        width: '100%',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ border: '1px solid #333' }}
      >
        {/* --- COLUMN 1: SICK PEOPLE (Left) --- */}

        {/* True Positive (Sick AND Test says Sick) - GREEN */}
        <rect x={0} y={0} width={wSick} height={hTP} fill={Theme.green} stroke="none" />
        {wSick > 20 && (
          <text
            x={wSick / 2}
            y={hTP / 2}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            TP
          </text>
        )}

        {/* False Negative (Sick but Test says Healthy) - RED */}
        <rect
          x={0}
          y={hTP}
          width={wSick}
          height={hFN}
          fill={Theme.red}
          opacity={0.3}
          stroke="none"
        />

        {/* --- COLUMN 2: HEALTHY PEOPLE (Right) --- */}

        {/* False Positive (Healthy but Test says Sick) - ORANGE */}
        {/* This is the dangerous one! */}
        <rect
          x={wSick}
          y={0}
          width={wHealthy}
          height={hFP}
          fill={Theme.orange}
          stroke="none"
        />
        {hFP > 20 && (
          <text
            x={wSick + wHealthy / 2}
            y={hFP / 2}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            FP
          </text>
        )}

        {/* True Negative (Healthy AND Test says Healthy) - GREY */}
        <rect
          x={wSick}
          y={hFP}
          width={wHealthy}
          height={hTN}
          fill="#333"
          opacity={0.3}
          stroke="none"
        />
      </svg>

      {/* RESULT TEXT */}
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <span style={{ fontSize: '1rem', color: '#888' }}>
          If you test positive, chance you are sick:
        </span>
        <br />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: Theme.green }}>
          {probSickGivenPositive.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

BayesVisual.propTypes = {
  params: PropTypes.shape({
    prevalence: PropTypes.number.isRequired,
    sensitivity: PropTypes.number.isRequired,
    specificity: PropTypes.number.isRequired,
  }).isRequired,
};

export default BayesVisual;

import { useState } from 'react';
import PropTypes from 'prop-types';

const KMeansControls = ({ params, setParams }) => {
  const [stepPhase, setStepPhase] = useState('ASSIGN'); // 'ASSIGN' or 'UPDATE'

  // --- ALGORITHM LOGIC ---

  const performStep = () => {
    const { points, centroids, assignments } = params;

    if (stepPhase === 'ASSIGN') {
      // PHASE 1: Assign every point to the nearest centroid
      const newAssignments = points.map((pt) => {
        let minDist = Infinity;
        let closestIndex = -1;

        centroids.forEach((c, index) => {
          const dist = Math.sqrt((pt.x - c.x) ** 2 + (pt.y - c.y) ** 2);
          if (dist < minDist) {
            minDist = dist;
            closestIndex = index;
          }
        });
        return closestIndex;
      });

      setParams((prev) => ({ ...prev, assignments: newAssignments }));
      setStepPhase('UPDATE'); // Next phase is moving centroids
    } else {
      // PHASE 2: Move centroids to the average of their assigned points
      const newCentroids = centroids.map((c, index) => {
        // Find all points belonging to this centroid
        const myPoints = points.filter((_, i) => assignments[i] === index);

        if (myPoints.length === 0) return c; // No points? Don't move.

        // Calculate Average X and Y
        const avgX = myPoints.reduce((sum, p) => sum + p.x, 0) / myPoints.length;
        const avgY = myPoints.reduce((sum, p) => sum + p.y, 0) / myPoints.length;

        return { x: avgX, y: avgY };
      });

      setParams((prev) => ({ ...prev, centroids: newCentroids }));
      setStepPhase('ASSIGN'); // Back to assignment
    }
  };

  const reset = () => {
    // Generate 3 random centroids
    const randomCentroids = [
      { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 },
      { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 },
      { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 },
    ];
    // Reset assignments to -1 (unassigned)
    const emptyAssignments = new Array(params.points.length).fill(-1);

    setParams((prev) => ({
      ...prev,
      centroids: randomCentroids,
      assignments: emptyAssignments,
    }));
    setStepPhase('ASSIGN');
  };

  return (
    <div className="controls-content">
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h4
          style={{
            margin: '0 0 10px 0',
            color: stepPhase === 'ASSIGN' ? '#3b82f6' : '#22c55e',
          }}
        >
          Next Step: {stepPhase === 'ASSIGN' ? 'Assign Points' : 'Move Centroids'}
        </h4>

        <button
          onClick={performStep}
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
          Take Step
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={reset}
          style={{
            padding: '5px 15px',
            background: 'transparent',
            border: '1px solid #666',
            color: '#888',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Randomize Centroids
        </button>
      </div>

      <p
        style={{
          fontSize: '0.8rem',
          color: '#666',
          marginTop: '1.5rem',
          textAlign: 'center',
        }}
      >
        Keep clicking Take Step until the Centroids stop moving. That is called{' '}
        <strong>Convergence</strong>.
      </p>
    </div>
  );
};

KMeansControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default KMeansControls;

import PropTypes from 'prop-types';

const DBSCANControls = ({ params, setParams }) => {
  const step = () => {
    const { points, status, currentIdx, epsilon, queue, clusterId } = params;

    // If finished
    if (currentIdx === -1 && queue.length === 0) {
      // Find next unvisited point to start new cluster
      const nextStart = status.findIndex((s) => s === 0);
      if (nextStart === -1) return; // Done!

      // Start new cluster
      const newStatus = [...status];
      newStatus[nextStart] = clusterId; // Mark as part of current cluster

      setParams((prev) => ({
        ...prev,
        currentIdx: nextStart,
        status: newStatus,
        queue: [nextStart], // Add to queue
      }));
      return;
    }

    // Process current queue
    if (queue.length > 0) {
      const pIdx = queue[0]; // Get first in queue
      const remainingQueue = queue.slice(1);

      // Find neighbors
      const p = points[pIdx];
      const neighbors = [];
      points.forEach((pt, i) => {
        if (i === pIdx) return;
        const dist = Math.sqrt((pt.x - p.x) ** 2 + (pt.y - p.y) ** 2);
        if (dist <= epsilon) neighbors.push(i);
      });

      // "Infect" neighbors
      const newStatus = [...status];
      const newQueue = [...remainingQueue];

      // If enough neighbors (minPts=1 for simplicity visual), expand
      neighbors.forEach((nIdx) => {
        if (newStatus[nIdx] === 0) {
          // If unvisited
          newStatus[nIdx] = clusterId; // Assign to cluster
          newQueue.push(nIdx); // Add to queue to process later
        }
      });

      setParams((prev) => ({
        ...prev,
        status: newStatus,
        queue: newQueue,
        currentIdx: newQueue.length > 0 ? newQueue[0] : -1,
        // If queue empty, increment cluster ID for next time
        clusterId: newQueue.length === 0 ? prev.clusterId + 1 : prev.clusterId,
      }));
    }
  };

  const reset = () => {
    setParams((prev) => ({
      ...prev,
      status: new Array(prev.points.length).fill(0),
      currentIdx: -1,
      queue: [],
      clusterId: 2, // Start colors at 2 (Blue)
    }));
  };

  return (
    <div className="controls-content">
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <button
          onClick={step}
          style={{
            padding: '5px 15px',
            background: 'transparent',
            border: '1px solid #666',
            color: '#888',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Expand Cluster
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Epsilon (Reach): {params.epsilon}</label>
        <input
          type="range"
          name="epsilon"
          min="0.5"
          max="2"
          step="0.1"
          value={params.epsilon}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, epsilon: parseFloat(e.target.value) }))
          }
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={reset}
          style={{
            background: 'transparent',
            border: '1px solid #666',
            color: '#888',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

DBSCANControls.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default DBSCANControls;

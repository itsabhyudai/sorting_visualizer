// src/components/Complexity.js
import React from 'react';

const Complexity = ({ algorithm }) => {
  const complexityDetails = {
    bubble: 'Time Complexity: O(n^2) on average and in the worst case. Space Complexity: O(1).',
    selection: 'Time Complexity: O(n^2) on average and in the worst case. Space Complexity: O(1).',
    insertion: 'Time Complexity: O(n^2) worst case, O(n) best case. Space Complexity: O(1).',
    heap: 'Time Complexity: O(n log n) on average and in the worst case. Space Complexity: O(1).',
    merge: 'Time Complexity: O(n log n) in all cases. Space Complexity: O(n).',
    quick: 'Time Complexity: O(n log n) average, O(n^2) worst case. Space Complexity: O(log n).',
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Complexity</h2>
      <p>{complexityDetails[algorithm] || 'Select an algorithm to see the complexity details.'}</p>
    </div>
  );
};

export default Complexity;

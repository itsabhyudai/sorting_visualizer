// src/components/ProsAndCons.js
import React from 'react';

const ProsAndCons = ({ algorithm }) => {
  const prosAndConsDetails = {
    bubble: 'Pros: Simple to implement.\nCons: Inefficient for large datasets with high time complexity.',
    selection: 'Pros: Reduces the number of swaps.\nCons: Inefficient for large datasets; performs poorly compared to advanced algorithms.',
    insertion: 'Pros: Efficient for small or partially sorted arrays.\nCons: Inefficient for large, unsorted datasets.',
    heap: 'Pros: Consistent O(n log n) performance.\nCons: Not stable and requires extra space for the heap.',
    merge: 'Pros: Reliable O(n log n) performance; stable.\nCons: Requires additional memory space for merging.',
    quick: 'Pros: Fast on average with O(n log n); highly efficient.\nCons: Worst-case time complexity is O(n^2), but can be optimized with random pivots.',
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Pros and Cons</h2>
      <p>{prosAndConsDetails[algorithm] || 'Select an algorithm to see its pros and cons.'}</p>
    </div>
  );
};

export default ProsAndCons;

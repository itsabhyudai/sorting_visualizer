// src/components/AlgorithmOverview.js
import React from 'react';

const AlgorithmOverview = ({ algorithm }) => {
  const overviewDetails = {
    bubble: 'Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    selection: 'Selection Sort repeatedly selects the smallest element from the unsorted section and moves it to the sorted section.',
    insertion: 'Insertion Sort builds the final sorted array one item at a time, picking each item and placing it in its correct position.',
    heap: 'Heap Sort builds a max heap from the array and then extracts the largest element to sort it.',
    merge: 'Merge Sort divides the array into halves, recursively sorts them, and merges the sorted halves.',
    quick: 'Quick Sort selects a pivot, partitions the array around it, and recursively sorts the partitions.',
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">How it Works</h2>
      <p>{overviewDetails[algorithm] || 'Select an algorithm to see the details.'}</p>
    </div>
  );
};

export default AlgorithmOverview;

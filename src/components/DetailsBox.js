// src/components/DetailsBox.js
import React from 'react';

const DetailsBox = ({ algorithm }) => {
  let description = '';

  switch (algorithm) {
    case 'bubble':
      description = 'Bubble Sort compares adjacent elements and swaps them if they are in the wrong order.';
      break;
    case 'selection':
      description = 'Selection Sort selects the smallest element and swaps it with the first unsorted element.';
      break;
    case 'insertion':
      description = 'Insertion Sort inserts each element into its correct position in the sorted portion of the array.';
      break;
    case 'heap':
      description = 'Heap Sort builds a heap data structure and sorts the array by repeatedly extracting the largest element.';
      break;
    case 'merge':
      description = 'Merge Sort recursively splits the array into halves and merges them in sorted order.';
      break;
    case 'quick':
      description = 'Quick Sort selects a pivot element and partitions the array around the pivot before recursively sorting each partition.';
      break;
    default:
      description = 'Choose an algorithm to see its description.';
      break;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mt-6 w-80 text-center">
      <h3 className="text-lg font-semibold text-gray-800">Algorithm: {algorithm}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default DetailsBox;

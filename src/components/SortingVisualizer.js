// src/components/SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ControlPanel from './ControlPanel';
import AlgorithmOverview from './AlgorithmOverview';
import Complexity from './Complexity';
import ProsAndCons from './ProsAndCons';

const generateNewArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 20);
};

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(100);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [array, setArray] = useState(generateNewArray(arraySize));
  const [showPopup, setShowPopup] = useState(false);
  const [sortingTime, setSortingTime] = useState(null);

  useEffect(() => {
    setArray(generateNewArray(arraySize));
  }, [arraySize]);

  const closePopup = () => setShowPopup(false);

  // Bubble Sort implementation
  const bubbleSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    for (let i = 0; i < arrayCopy.length - 1; i++) {
      for (let j = 0; j < arrayCopy.length - i - 1; j++) {
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
          setArray([...arrayCopy]);
          await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
        }
      }
    }

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };

  // Selection Sort implementation
  const selectionSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    for (let i = 0; i < arrayCopy.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arrayCopy.length; j++) {
        if (arrayCopy[j] < arrayCopy[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
        setArray([...arrayCopy]);
        await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
      }
    }

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };

  // Insertion Sort implementation
  const insertionSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    for (let i = 1; i < arrayCopy.length; i++) {
      let key = arrayCopy[i];
      let j = i - 1;
      while (j >= 0 && arrayCopy[j] > key) {
        arrayCopy[j + 1] = arrayCopy[j];
        j = j - 1;
      }
      arrayCopy[j + 1] = key;
      setArray([...arrayCopy]);
      await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
    }

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };

  // Heap Sort implementation
  const heapSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    // Helper function to heapify the tree
    const heapify = async (arr, n, i) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;

      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
        await heapify(arr, n, largest);
      }
    };

    // Build max heap
    const n = arrayCopy.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arrayCopy, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i >= 0; i--) {
      [arrayCopy[0], arrayCopy[i]] = [arrayCopy[i], arrayCopy[0]]; // Swap root (max element) with the last element
      setArray([...arrayCopy]);
      await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
      await heapify(arrayCopy, i, 0);
    }

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };

  // Merge Sort implementation
  const mergeSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    // Helper function to merge two sorted arrays
    const merge = (left, right) => {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    };

    // Helper function to split and sort the array recursively
    const mergeSortHelper = async (arr) => {
      if (arr.length <= 1) return arr;

      const mid = Math.floor(arr.length / 2);
      const left = await mergeSortHelper(arr.slice(0, mid));
      const right = await mergeSortHelper(arr.slice(mid));

      const merged = merge(left, right);
      setArray([...merged]);
      await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
      return merged;
    };

    await mergeSortHelper(arrayCopy);

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };

  // Quick Sort implementation
  const quickSort = async () => {
    const arrayCopy = [...array];
    const startTime = performance.now(); // Start time

    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
      }
    };

    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, speed)); // Control sorting speed
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      return i + 1;
    };

    await quickSortHelper(arrayCopy, 0, arrayCopy.length - 1);

    const endTime = performance.now(); // End time
    setSortingTime(((endTime - startTime) / 1000).toFixed(2)); // Calculate time in seconds and set the state
    setShowPopup(true); // Show popup when sorting is complete
  };


  // Execute the selected sorting algorithm
  const sortArray = async () => {
    if (algorithm === 'bubble') {
      await bubbleSort();
    } else if (algorithm === 'selection') {
      await selectionSort();
    } else if (algorithm === 'insertion') {
      await insertionSort();
    } else if (algorithm === 'heap') {
      await heapSort();
    } else if (algorithm === 'merge') {
      await mergeSort();
    } else if (algorithm === 'quick') {
      await quickSort();
    }
  };

  // Handle generate new array
  const generateNewArrayHandler = () => {
    setArray(generateNewArray(arraySize));
    setSortingTime(null); // Reset sorting time when generating a new array
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white my-6">Sorting Visualizer</h1>

      <ControlPanel
        onSort={sortArray}
        onGenerate={generateNewArrayHandler}
        onChangeAlgorithm={(e) => setAlgorithm(e.target.value)}
        setArraySize={setArraySize}
        setSpeed={setSpeed}
        arraySize={arraySize}
        speed={speed}
      />

      <div className="flex justify-center mt-8 space-x-1">
        {array.map((value, idx) => (
          <motion.div
            key={idx}
            animate={{ height: `${value}px` }}
            transition={{ duration: 0.2 }}
            className="bg-blue-500 w-4 rounded-md shadow-lg"
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <AlgorithmOverview algorithm={algorithm} />
        <Complexity algorithm={algorithm} />
        <ProsAndCons algorithm={algorithm} />
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-8 text-center text-black"
          >
            <h2 className="text-2xl font-bold mb-4">Sorting Completed!</h2>
            <p className="text-lg">Time taken: {sortingTime} seconds</p>
            <button
              className="mt-6 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md"
              onClick={closePopup}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;

// src/components/ControlPanel.js
import React from 'react';

const ControlPanel = ({ onSort, onGenerate, onChangeAlgorithm, setArraySize, setSpeed, arraySize, speed }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 w-80">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Control Panel</h2>

      <select
        onChange={onChangeAlgorithm}
        className="block w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="heap">Heap Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="quick">Quick Sort</option>
      </select>

      <div className="flex justify-between items-center mb-4">
        <label className="text-gray-700">Array Size</label>
        <input
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="w-32"
        />
        <span>{arraySize}</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <label className="text-gray-700">Delay</label>
        <input
          type="range"
          min="10"
          max="500"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-32"
        />
        <span>{speed}</span>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onSort}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
        >
          Sort
        </button>
        <button
          onClick={onGenerate}
          className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;

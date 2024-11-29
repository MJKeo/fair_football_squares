import React, { useState } from "react";
import NameInputScreen from "./NameInputScreen";
import SquaresScreen from "./SquaresScreen";
import MaxHeap, { convertToMaxHeap } from "./MaxHeap";

function App() {
  const [grid, setGrid] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(""))
  );
  const [showSquares, setShowSquares] = useState(false); // Toggle between screens
  const [names, setNames] = useState([]); // Array of entered names

  const SQUARE_PROBABILITIES = [
    [1.96, 1.58, 0.52, 2.52, 2.54, 0.64, 1.20, 3.78, 0.98, 0.67],
    [1.58, 0.90, 0.35, 1.13, 2.38, 0.55, 0.73, 1.99, 1.19, 0.44],
    [0.52, 0.35, 0.12, 0.35, 0.51, 0.28, 0.24, 0.61, 0.27, 0.25],
    [2.52, 1.13, 0.35, 1.02, 1.64, 0.43, 1.15, 2.13, 0.71, 0.52],
    [2.54, 2.38, 0.51, 1.64, 1.75, 0.64, 1.03, 3.64, 1.15, 0.68],
    [0.64, 0.55, 0.28, 0.43, 0.64, 0.19, 0.25, 0.71, 0.53, 0.20],
    [1.20, 0.73, 0.24, 1.15, 1.03, 0.25, 0.40, 1.21, 0.42, 0.46],
    [3.78, 1.99, 0.61, 2.13, 3.64, 1.15, 1.21, 2.36, 1.12, 0.76],
    [0.98, 1.19, 0.27, 0.71, 1.15, 0.53, 0.42, 1.12, 0.41, 0.26],
    [0.67, 0.44, 0.25, 0.52, 0.68, 0.20, 0.46, 0.76, 0.26, 0.16]
];

const generateRandomArray = (N) => {
  console.log(N);
  const array = Array.from({ length: N }, (_, index) => index); // [0, 1, ..., N-1]
  console.log(array);
  for (let i = 1000; i > 0; i--) {
    const l = Math.floor(Math.random() * (array.length)); // Random index
    const r = Math.floor(Math.random() * (array.length)); // Random index
    const left = array[l];
    const right = array[r];
    array[l] = right;
    array[r] = left;
  }
  return array;
};

const createGridFromNames = (namesArray) => {
  // Step 0 - Setup
  const maxHeap = convertToMaxHeap(SQUARE_PROBABILITIES);
  const NUM_PLAYERS = namesArray.length
  // Hats
  const minimum_hats = 5;
  const ideal_hat_count = 10;
  const mod = 100 % NUM_PLAYERS;
  const avg = ((mod + NUM_PLAYERS) / 2.0);
  var HATS_COUNT = 100 % NUM_PLAYERS;
  if (avg <= ideal_hat_count || mod < minimum_hats) {
    HATS_COUNT += NUM_PLAYERS;
  }
  // Step 1 - Give everyone one of the top N squares
  const order = generateRandomArray(NUM_PLAYERS);
  order.forEach((item, index) => {
    const square = maxHeap.pop();
    const row = square[1];
    const col = square[2];
    grid[row][col] = namesArray[item];
  });

  // Step 2 - Put aside the hats
  for (let i = HATS_COUNT; i > 0; i--) {
    const square = maxHeap.pop();
    const row = square[1];
    const col = square[2];
    grid[row][col] = "???";
  }

  // Step 3 - Keep looping through giving everyone the next top N squares
  const number_of_loops = Math.ceil(100 / NUM_PLAYERS) - 2;
  for (let i = number_of_loops; i > 0; i--) {
    const order = generateRandomArray(NUM_PLAYERS);
    order.forEach((item, index) => {
      const square = maxHeap.pop();
      if (square == null) {
        return grid;
      }
      const row = square[1];
      const col = square[2];
      grid[row][col] = namesArray[item];
    });
  }
  return grid;
}

  // Function to handle "Create Squares"
  const handleCreateSquares = (namesArray) => {
    setNames(namesArray);
    setGrid(createGridFromNames(namesArray)); // Update the grid state
    setShowSquares(true); // Show the SquaresScreen
  };

  // Function to reset the app
  const handleStartOver = () => {
    setGrid([[],[],[],[],[],[],[],[],[],[]]); // Clear the grid state
    setShowSquares(false); // Show the NameInputScreen
  };

  return (
    <div>
      {!showSquares ? (
        <NameInputScreen names2={names} onCreateSquares={handleCreateSquares} />
      ) : (
        <SquaresScreen data={grid} onStartOver={handleStartOver} />
      )}
    </div>
  );
}

export default App;

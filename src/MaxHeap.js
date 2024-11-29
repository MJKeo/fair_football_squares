class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Swap two elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // Insert a new element into the heap
    insert(element) {
      this.heap.push(element);
      this.heapifyUp();
    }
  
    // Restore the heap property after insertion
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex][0] >= this.heap[index][0]) break;
        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    // Remove and return the maximum element
    extractMax() {
      return this.pop(); // Alias for `pop`, so both names can be used
    }
  
    // Pop the maximum element from the heap
    pop() {
      if (this.heap.length === 0) return null; // Return null if the heap is empty
      if (this.heap.length === 1) return this.heap.pop(); // Only one element in the heap
  
      const max = this.heap[0]; // Root of the heap is the maximum value
      this.heap[0] = this.heap.pop(); // Replace root with the last element
      this.heapifyDown(0); // Restore heap property
      return max; // Return the maximum value
    }
  
    // Restore the heap property after extraction
    heapifyDown(index) {
      const length = this.heap.length;
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
  
      if (left < length && this.heap[left][0] > this.heap[largest][0]) {
        largest = left;
      }
  
      if (right < length && this.heap[right][0] > this.heap[largest][0]) {
        largest = right;
      }
  
      if (largest !== index) {
        this.swap(index, largest);
        this.heapifyDown(largest);
      }
    }
  }
  
  // Function to convert a 10x10 array into a max heap
  export function convertToMaxHeap(matrix) {
    const heap = new MaxHeap();
  
    // Flatten the 10x10 array into tuples and insert into the heap
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        const value = matrix[row][col];
        heap.insert([value, row, col]); // Insert tuple: [value, row, col]
      }
    }
  
    return heap;
  }

  export default MaxHeap;
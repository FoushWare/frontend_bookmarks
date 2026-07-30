import type { Project } from '../types/project';

export const gridProjects: Project[] = [
  {
    id: 'grid-template-columns',
    title: 'grid-template-columns',
    difficulty: 'beginner',
    instructions: 'Use grid-template-columns to define the number and size of columns in a grid layout. Create 4 equal columns.',
    expectedResult: 'Four boxes arranged in a single row with equal column widths.',
    hints: [
      'Use grid-template-columns: repeat(4, 1fr) for 4 equal columns.',
      'The fr unit represents a fraction of available space.',
      'Remember to set display: grid on the container first.'
    ],
    tests: [
      {
        id: 'grid-display',
        description: 'Container has display: grid',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'grid';
        }
      },
      {
        id: 'columns-defined',
        description: 'grid-template-columns is defined',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.gridTemplateColumns !== 'none';
        }
      },
      {
        id: 'four-items',
        description: 'Four boxes are present',
        check: (doc) => {
          const boxes = doc.querySelectorAll('.box');
          return boxes.length === 4;
        }
      }
    ],
    css: {
      starterHtml: `<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
  <div class="box box4">Box 4</div>
</div>`,
      starterCode: `.container {
  display: grid;
  /* Add grid-template-columns here */
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`,
      solutionCode: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
  <div class="box box4">Box 4</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
  <div class="box">Box 4</div>
</div>`,
      solutionCode: `<div class="grid grid-cols-4 gap-2 p-5 bg-gray-100 rounded-lg">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 1</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 2</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 3</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 4</div>
</div>`
    }
  },
  {
    id: 'grid-template-rows',
    title: 'grid-template-rows',
    difficulty: 'beginner',
    instructions: 'Use grid-template-rows to define the number and size of rows in a grid layout. Create 3 equal rows.',
    expectedResult: 'Three boxes arranged vertically in equal row heights.',
    hints: [
      'Use grid-template-rows: repeat(3, 1fr) for 3 equal rows.',
      'Rows are defined from top to bottom.',
      'Combine with grid-template-columns for 2D layouts.'
    ],
    tests: [
      {
        id: 'grid-display',
        description: 'Container has display: grid',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'grid';
        }
      },
      {
        id: 'rows-defined',
        description: 'grid-template-rows is defined',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.gridTemplateRows !== 'none';
        }
      },
      {
        id: 'three-items',
        description: 'Three boxes are present',
        check: (doc) => {
          const boxes = doc.querySelectorAll('.box');
          return boxes.length === 3;
        }
      }
    ],
    css: {
      starterHtml: `<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</div>`,
      starterCode: `.container {
  display: grid;
  /* Add grid-template-rows here */
  height: 300px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`,
      solutionCode: `.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  height: 300px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      solutionCode: `<div class="grid grid-rows-3 gap-2 p-5 bg-gray-100 rounded-lg h-75">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 1</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 2</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 3</div>
</div>`
    }
  }
];

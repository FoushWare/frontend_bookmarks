import type { Project } from '../types/project';

export const flexboxProjects: Project[] = [
  {
    id: 'justify-content',
    title: 'justify-content',
    difficulty: 'beginner',
    instructions: 'Use justify-content to distribute space between flex items horizontally. The items should be evenly spaced with the first item at the start and the last item at the end.',
    expectedResult: 'Three boxes evenly distributed across the container with space between them.',
    hints: [
      'Use justify-content: space-between to put items at the edges with space between.',
      'Remember to set display: flex on the container first.',
      'The justify-content property works on the main axis (horizontal by default).'
    ],
    tests: [
      {
        id: 'flex-display',
        description: 'Container has display: flex',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'flex';
        }
      },
      {
        id: 'space-between',
        description: 'Items are distributed with space-between',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.justifyContent === 'space-between';
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
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `.container {
  /* Add display and justify-content here */
}

.box {
  width: 100px;
  height: 100px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}`,
      solutionCode: `.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.box {
  width: 100px;
  height: 100px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      solutionCode: `<div class="flex justify-between p-5 bg-gray-100 rounded-lg">
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 1</div>
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 2</div>
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 3</div>
</div>`
    }
  },
  {
    id: 'align-items',
    title: 'align-items',
    difficulty: 'beginner',
    instructions: 'Use align-items to vertically center flex items in the container. The items should be centered vertically regardless of their individual heights.',
    expectedResult: 'Three boxes vertically centered in the container.',
    hints: [
      'Use align-items: center to center items vertically.',
      'The align-items property works on the cross axis (vertical by default).',
      'Make sure the container has a defined height to see the effect.'
    ],
    tests: [
      {
        id: 'flex-display',
        description: 'Container has display: flex',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'flex';
        }
      },
      {
        id: 'align-center',
        description: 'Items are vertically centered',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.alignItems === 'center';
        }
      },
      {
        id: 'container-height',
        description: 'Container has defined height',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return parseInt(styles.height) > 0;
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
  display: flex;
  height: 200px;
  /* Add align-items here */
}

.box {
  width: 100px;
  height: 50px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}`,
      solutionCode: `.container {
  display: flex;
  height: 200px;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.box {
  width: 100px;
  height: 50px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
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
      solutionCode: `<div class="flex items-center h-50 p-5 bg-gray-100 rounded-lg">
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 1</div>
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 2</div>
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 3</div>
</div>`
    }
  },
  {
    id: 'flex-direction',
    title: 'flex-direction',
    difficulty: 'beginner',
    instructions: 'Use flex-direction to control the direction of flex items. Change the default row layout to a column layout.',
    expectedResult: 'Three boxes stacked vertically in a column.',
    hints: [
      'Use flex-direction: column to stack items vertically.',
      'The default value is row (horizontal).',
      'You can also use column-reverse to reverse the order.'
    ],
    tests: [
      {
        id: 'flex-display',
        description: 'Container has display: flex',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'flex';
        }
      },
      {
        id: 'column-direction',
        description: 'Items are arranged in a column',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.flexDirection === 'column';
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
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `.container {
  display: flex;
  /* Add flex-direction here */
}

.box {
  width: 100px;
  height: 50px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}`,
      solutionCode: `.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.box {
  width: 100px;
  height: 50px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      solutionCode: `<div class="flex flex-col p-5 bg-gray-100 rounded-lg">
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold mb-2">Box 1</div>
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold mb-2">Box 2</div>
  <div class="w-25 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 3</div>
</div>`
    }
  },
  {
    id: 'gap',
    title: 'gap',
    difficulty: 'beginner',
    instructions: 'Use the gap property to add consistent spacing between flex items. The gap should be 20px between all items.',
    expectedResult: 'Three boxes with 20px spacing between them.',
    hints: [
      'Use gap: 20px to add 20px spacing between items.',
      'The gap property is cleaner than using margins.',
      'Gap works with both flexbox and grid layouts.'
    ],
    tests: [
      {
        id: 'flex-display',
        description: 'Container has display: flex',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'flex';
        }
      },
      {
        id: 'gap-spacing',
        description: 'Items have gap spacing',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.gap === '20px';
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
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `.container {
  display: flex;
  /* Add gap here */
}

.box {
  width: 100px;
  height: 100px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      solutionCode: `.container {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.box {
  width: 100px;
  height: 100px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>`,
      solutionCode: `<div class="flex gap-5 p-5 bg-gray-100 rounded-lg">
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 1</div>
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 2</div>
  <div class="w-25 h-25 bg-indigo-500 text-white flex items-center justify-center rounded-lg font-bold">Box 3</div>
</div>`
    }
  }
];

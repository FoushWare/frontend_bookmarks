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
  },
  {
    id: 'gap',
    title: 'gap',
    difficulty: 'beginner',
    instructions: 'Use the gap property to add consistent spacing between grid items. Add 15px gap between all items.',
    expectedResult: 'Four boxes with 15px spacing between them both horizontally and vertically.',
    hints: [
      'Use gap: 15px to add 15px spacing between items.',
      'Gap works with both flexbox and grid layouts.',
      'You can also use row-gap and column-gap separately.'
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
        id: 'gap-spacing',
        description: 'Items have gap spacing',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.gap === '15px';
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
  grid-template-columns: 1fr 1fr;
  /* Add gap here */
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
  grid-template-columns: 1fr 1fr;
  gap: 15px;
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
      solutionCode: `<div class="grid grid-cols-2 gap-4 p-5 bg-gray-100 rounded-lg">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 1</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 2</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 3</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 4</div>
</div>`
    }
  },
  {
    id: 'grid-column',
    title: 'grid-column',
    difficulty: 'intermediate',
    instructions: 'Use grid-column to make an item span across multiple columns. Make the second box span 2 columns.',
    expectedResult: 'Four boxes in a 3-column grid where the second box spans across 2 columns.',
    hints: [
      'Use grid-column: span 2 to make an item span 2 columns.',
      'You can also use grid-column-start and grid-column-end separately.',
      'The span keyword is a shorthand for start and end.'
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
        id: 'column-span',
        description: 'Second box spans 2 columns',
        check: (doc) => {
          const box2 = doc.querySelector('.box2');
          if (!box2) return false;
          const styles = window.getComputedStyle(box2);
          return styles.gridColumn === 'span 2' || styles.gridColumn === 'auto / span 2';
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
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}

.box2 {
  /* Add grid-column here */
}`,
      solutionCode: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
}

.box2 {
  grid-column: span 2;
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
      solutionCode: `<div class="grid grid-cols-3 gap-2 p-5 bg-gray-100 rounded-lg">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 1</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg col-span-2">Box 2</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 3</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 4</div>
</div>`
    }
  },
  {
    id: 'grid-row',
    title: 'grid-row',
    difficulty: 'intermediate',
    instructions: 'Use grid-row to make an item span across multiple rows. Make the first box span 2 rows.',
    expectedResult: 'Four boxes in a 2-column grid where the first box spans across 2 rows.',
    hints: [
      'Use grid-row: span 2 to make an item span 2 rows.',
      'Works similarly to grid-column but for rows.',
      'Combine with grid-column for complex layouts.'
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
        id: 'row-span',
        description: 'First box spans 2 rows',
        check: (doc) => {
          const box1 = doc.querySelector('.box1');
          if (!box1) return false;
          const styles = window.getComputedStyle(box1);
          return styles.gridRow === 'span 2' || styles.gridRow === 'auto / span 2';
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}

.box1 {
  /* Add grid-row here */
}`,
      solutionCode: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 100px);
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
}

.box1 {
  grid-row: span 2;
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
      solutionCode: `<div class="grid grid-cols-2 grid-rows-2 gap-2 p-5 bg-gray-100 rounded-lg">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg row-span-2">Box 1</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 2</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 3</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg">Box 4</div>
</div>`
    }
  },
  {
    id: 'grid-area',
    title: 'grid-area',
    difficulty: 'advanced',
    instructions: 'Use grid-area to place items using named areas. Create a layout with a header, sidebar, main content, and footer.',
    expectedResult: 'A 3x3 grid with header spanning top, sidebar on left, main in center, and footer at bottom.',
    hints: [
      'Use grid-template-areas to define the layout structure.',
      'Use grid-area on individual items to place them in named areas.',
      'Each area name in the template represents a cell or spanned area.'
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
        id: 'areas-defined',
        description: 'Grid areas are defined',
        check: (doc) => {
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.gridTemplateAreas !== 'none';
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
  <div class="box header">Header</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box main">Main</div>
  <div class="box footer">Footer</div>
</div>`,
      starterCode: `.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  /* Add grid-template-areas here */
  gap: 10px;
  min-height: 300px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}

.header { /* Add grid-area */ }
.sidebar { /* Add grid-area */ }
.main { /* Add grid-area */ }
.footer { /* Add grid-area */ }`,
      solutionCode: `.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 10px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  min-height: 300px;
}

.box {
  background: #667eea;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`
    },
    tailwind: {
      starterHtml: `<div class="container">
  <div class="box header">Header</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box main">Main</div>
  <div class="box footer">Footer</div>
</div>`,
      starterCode: `<div class="container">
  <div class="box">Header</div>
  <div class="box">Sidebar</div>
  <div class="box">Main</div>
  <div class="box">Footer</div>
</div>`,
      solutionCode: `<div class="grid grid-cols-[1fr_2fr] grid-rows-[auto_1fr_auto] gap-2 p-5 bg-gray-100 rounded-lg min-h-75" style="grid-template-areas: 'header header' 'sidebar main' 'footer footer'">
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg" style="grid-area: header">Header</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg" style="grid-area: sidebar">Sidebar</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg" style="grid-area: main">Main</div>
  <div class="bg-indigo-500 text-white p-5 text-center font-bold rounded-lg" style="grid-area: footer">Footer</div>
</div>`
    }
  }
];

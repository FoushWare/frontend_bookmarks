function* getEmojis() {
  yield "😀";
  yield "😃";
  yield "😄";
}

const myEmojis = getEmojis();
for (let item of myEmojis) {
  console.log(item);
}
console.log("===========================");

// ===== for...of

// it's used for iterating over the iterable object like :
// array,string,map,set,object,generator,args of function

// example 01
console.log("example 01: for...of (array)");
const arr = ["a", "b", "c"];
for (let item of arr) console.log(item);

console.log("===========================");
// example 02
console.log("example 02: for...of (string)");
const str = "abc";
for (let item of str) console.log(item);

console.log("===========================");

// example 03
console.log("example 03: for...of (set)");
const mySet = new Set(["a", "b", "c", "a"]);
for (let item of mySet) console.log(item);

console.log("===========================");
// example 04
console.log("example 04: for...of (map)");
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (let item of myMap) console.log(item);

console.log("===========================");
// example 05
console.log(
  "example 05: for...of (object)... 🚨 if you run example of object you will get error object not iterable so try with example06"
);
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (let item of obj) console.log(item);

console.log("===========================");
// example 06
console.log(
  "example 06: create custom iterabale for the object it's called user iterator"
);
const iterable = {
  [Symbol.iterator]() {
    // your data you want to iterate over
    const arr = ["a", "b", "c"];
    let index = 0;
    return {
      // next function
      // return an object
      next() {
        if (index < arr.length) {
          return { value: arr[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const item of iterable) {
  console.log(item);
}
console.log("===========================");

// user iterator is reusable between loops
// example 07
console.log(
  "example 07: create custom iterabale for the object it's called user iterator",
  "is reusable between loops"
);
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// Another loop using the same iterator
// picks up where the last loop left off.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// The iterator is used up.
// This loop will execute no iterations.
for (const value of iterator) {
  console.log(value);
}
// [No output]

console.log("===========================");

// iterator by generator not reusable between loops
// example 08
console.log(
  "example 08: create custom iterabale for the object it's called user iterator",
  "is not reusable between loops"
);
const source2 = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const iterator2 = source2();
for (const value of iterator2) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// The generator is used up.
// This loop will execute no iterations.
for (const value of iterator2) {
  console.log(value);
}
// [No output]

console.log("===========================");

// ==== difference between for...of and for...in

// for...of
// for...in

// example 01
console.log("example 01: for...in");
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  console.log(key);
}
// a
// b
// c

console.log("===========================");

console.log("====So why would you ever want to use generator functions?====");
const bookClubs = [
  {
    name: "JavaScript",
    clubMembers: [
      {
        name: "johun hossain",
        books: [{ id: "hs891", title: "A Perfect" }],
      },
    ],
  },
];

// Function to generate a random alphanumeric string for book IDs
function generateRandomId() {
  return Math.random().toString(36).substring(2, 8);
}

// Function to generate a large dataset by replicating and modifying the existing data
function generateLargeDataset(originalData, size) {
  const largeDataset = [];
  const originalClub = originalData[0]; // Assuming there's only one club in the original data
  const originalBook = originalClub.clubMembers[0].books[0]; // Assuming there's only one book in the original club
  for (let i = 0; i < size; i++) {
    const newClub = { ...originalClub }; // Create a shallow copy of the original club
    newClub.name += `_${i + 1}`; // Modify club name to make it unique
    newClub.clubMembers = []; // Clear club members array
    for (const member of originalClub.clubMembers) {
      const newMember = { ...member }; // Create a shallow copy of the original member
      newMember.name += `_${i + 1}`; // Modify member name to make it unique
      newMember.books = []; // Clear books array
      for (const book of member.books) {
        const newBook = { ...book }; // Create a shallow copy of the original book
        if (i === 0) {
          // Keep the original book with ID "hs891" in the first object
          newBook.id = originalBook.id;
        } else {
          newBook.id = generateRandomId(); // Generate a new random ID for the book
        }
        newMember.books.push(newBook); // Add modified book to member's books array
      }
      newClub.clubMembers.push(newMember); // Add modified member to club's members array
    }
    largeDataset.push(newClub); // Add modified club to large dataset
  }
  return largeDataset;
}

// Generate a large dataset with 1000 clubs
const largeDataset = generateLargeDataset(bookClubs, 1000);

console.log(JSON.stringify(largeDataset, null, 2));

function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    yield book;
  }
}

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    yield* iterateBooks(member.books);
  }
}

function* iterateBookClubs(clubs) {
  for (let i = 0; i < clubs.length; i++) {
    const club = clubs[i];
    yield* iterateMembers(club.clubMembers);
  }
}
// const it = iterateBookClubs(largeDataset);
// console.log("✨ generator use case", JSON.stringify(it.next()));

function findBook(id) {
  const genObj = iterateBookClubs(largeDataset);
  let result = genObj.next();
  while (!result.done) {
    if (result.value.id === id) {
      console.log("founded");
      return result.value;
    } else {
      result = genObj.next();
    }
  }
}

console.log(findBook("hs891"));

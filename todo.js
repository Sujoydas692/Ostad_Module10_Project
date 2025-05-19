let lists = [
    { title: "Do homework", done: false },
    { title: "Learn JS", done: true },
    { title: "Learn PHP", done: null },
    { title: "Sleeping", done: true },
    { title: "Eating", done: false },
    { title: "Reading Book", done: null },
];

// done = true
let doneLists = [];

// done = false
let notDoneLists = [];

// done = null
let onGoingLists = [];

lists.forEach((list) => {
    if (list.done === true) {
        doneLists.push(list);
    } else if (list.done === false) {
        notDoneLists.push(list);
    } else {
        onGoingLists.push(list);
    }
});

console.log("✅ Done Todos: ");
doneLists.forEach((list) => {
    console.log(`- ${list.title}`);
});

console.log("\n⏳ On Going Todos: ");
onGoingLists.forEach((list) => {
    console.log(`- ${list.title}`);
});

console.log("\n❌ Not Done Todos: ");
notDoneLists.forEach((list) => {
    console.log(`- ${list.title}`);
});
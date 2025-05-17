let lists = [
    { title: "Do homework", done: false },
    { title: "Learn JS", done: true },
    { title: "Learn PHP", done: false },
    { title: "Sleeping", done: true },
];

// done = true
let doneLists = [];

// done = false
let onGoingLists = [];

lists.forEach((list) => {
    if (list.done) {
        doneLists.push(list);
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
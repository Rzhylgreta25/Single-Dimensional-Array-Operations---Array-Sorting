let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (in reverse):", numbers);

names.sort();
console.log("Sorted Names (alphabetically):", names);

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function sortNumbersDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

function sortNamesAlphabetically(names) {
    return names.sort();
}

let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArray = mergeArrays(numbers, names);
console.log("Merged Array:", mergedArray);

let sortedNumbers = sortNumbersDescending(numbers);
console.log("Sorted Numbers (in reverse):", sortedNumbers);

let sortedNames = sortNamesAlphabetically(names);
console.log("Sorted Names (alphabetically):", sortedNames);

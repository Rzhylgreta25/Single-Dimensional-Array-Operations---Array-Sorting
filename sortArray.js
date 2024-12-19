function processArrays() {
    let numbersStr = prompt("Enter numbers:");
    if (!numbersStr) {
        console.error("No input provided for numbers.");
        return null;
    }
    let numbers = numbersStr.split(',').map(Number).filter(num => !isNaN(num));
    if (numbers.length === 0) {
        console.error("Invalid input for numbers. Please enter numbers separated by commas.");
        return null; 
    }
    return numbers;
}

function processArrays() {
    let namesStr = prompt("Enter names:");
    if (!namesStr) {
        console.error("No input provided for names.");
        return null;
    }
    let names = namesStr.split(',').map(name => name.trim());
    if (names.length === 0) {
        console.error("Invalid input for names. Please enter names separated by commas.");
        return null;
    }
    return names;
}

function processArrays() {
    const numbers = getNumbersArray();
    const names = getNamesArray();

    if (numbers === null || names === null) {
        return;
    }

    const mergedArray = numbers.concat(names);
    console.log("Merged array:", mergedArray);

    numbers.sort((a, b) => b - a);
    console.log("Numbers sorted in reverse:", numbers);

    names.sort();
    console.log("Names sorted alphabetically:", names);
}
processArrays();
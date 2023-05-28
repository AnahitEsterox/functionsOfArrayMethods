// map
function customMap(array, callback) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }

    return newArray;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log('doubledNumbers: ', doubledNumbers);

// filter

function customFilter(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

const filteredNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log('filteredNumbers: ', filteredNumbers);

// find,
function customFind(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

const foundNumber = customFind(numbers, (num) => num % 2 === 0);
console.log('foundNumber: ', foundNumber);

// findIndex

function customFindIndex(array, finish) {
    for (let i = 0; i < array.length; i++) {
        if (finish(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

const index = customFindIndex(numbers, (element) => element > 3);
console.log('index: ', index);

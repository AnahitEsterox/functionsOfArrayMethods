
////////////////////////////////// map's alternative function in Prototype
Array.prototype.customMap = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}
const newNumbers = numbers.customMap((i) => i * 2)
console.log('newNumbers ', newNumbers)


//////////////////////////////////filter's alternative function in Prototype
Array.prototype.customFilter = function (callback) {
    const filteredArray = []
    for(let i = 0; i< this.length; i++) {
        if(callback(this[i], i, this)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}
const newFilteredNums = numbers.customFilter((i) => i % 2 === 0)
console.log('newFilteredNums: ', newFilteredNums)



//////////////////////////////////filter's alternative function in Prototype
Array.prototype.customFind = function (predicate) {
    for(let i = 1; i < this.length; i++) {
        if (predicate(this[i])) {
            return this[i]
        }
    }
}
const newFoundNum = numbers.customFind((i) => i % 2 === 0 )
console.log('newFoundNum: ', newFoundNum)


//////////////////////////////////findIndex's alternative function in Prototype
Array.prototype.customFindIndex = function (finish) {
    for(let i = 0; i < this.length; i++) {
        if(finish(this[i], i, this)) {
            return i
        }
    }
    return -1
}
let newFindedNums = numbers.customFindIndex((i) => i > 3)
console.log('newFindedNums: ', newFindedNums)
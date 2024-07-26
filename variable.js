for (var i = 0; i < 10; i++) {
    // i should be visible outside of block that's why var is not good
}

for (let y = 0; y < 10; y++) {
    // y should not be visible outside of this block
}

console.log("i value is " + i)
console.log("y value is " + y) // it will have error cause in this scope y is not defined
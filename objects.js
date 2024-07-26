const mystery = 'answer'

// it can be used like map in Java
const obj = {
    p1: 10,
    p2: 20,
    f1() { },
    f2: () => { },
    [mystery]: 42 // obj.answer will eqaul to 42
};

console.log(obj.answer)
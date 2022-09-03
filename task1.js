
function calculate(x, y) {
    if (x % 2 === 0 && y % 2 === 0) {
        return x * y;
    }
    if (x % 2 != 0 && y % 2 != 0) {
        return x + y;
    } 
    
    if (x % 2 !== 0 ) {
        return x;
    } else {
        return y;
    }
    } 

console.log(calculate(4, 2))
console.log(calculate(5, 2))
console.log(calculate(4, 3))
console.log(calculate(3, 9))

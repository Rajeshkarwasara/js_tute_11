// 1.	Write a JS code to delete all occurrence of element in given array
let arr = ["5", "1", "4", "5", "1", "5", "4", "5"];

arr.splice(0, 8,);
console.log(arr)

// 2.	Write a JS code to find the power of a number using for loop

function power(a, b) {
    let multiply = 1;
    for (let i = 0; i < b; i++)
        multiply *= a
    return multiply
}
let add = power(3, 2)
console.log(add)

// 3.	Write a JS code to find the number of zeros


function zero(array) {
    let Count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            Count++;
        }
    }
    return Count;
}
let addd = zero([0, 7, 2, 0, 3, 6, 9, 0, 0, 4, 7, 0, 0]);
console.log(addd);





//Write a JavaScript function named 'findMaxNumber' 
//that takes an array of numbers as an argument and
 //returns the maximum number in the array.
 // If the array is empty, the function should return null.

"use strict";
x = 3.14;
let array_numbers = []

function findMaxNumber(array_numbers){

    let max = array_numbers[0]
    if (array_numbers.length == 0){
        return null;
    }
    else{

        for(let i=0;i< array_numbers.length ;i++){
            if (array_numbers[i] > max){
                max = array_numbers[i]
            }
        }

        return max;
    

    }

}

console.log(findMaxNumber(array_numbers))

//Write a JavaScript function named 'mergeArrays'
 //that takes two arrays as arguments and returns a new array.
 
 function mergeArrays(array_one,array_two){
    let new_array = []
    // return new_array = [...array_one,...array_two]
    for( let i= 0;i< array_one.length;i++){
        new_array.push(array_one[i])
    }
    for( let i= 0;i< array_two.length;i++){
        new_array.push(array_two[i])
    }

    return new_array;
 }

 console.log(mergeArrays([1,2,3],[2,3,4,56]))

 //Create a function 'arrayValuesTypes' that takes an array and
 // returns the types of values ​​(data types) in a new array.
 // Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]


function arrayValuesTypes(array_values){

    let array_values_types = []

    for (let i=0; i < array_values.length ; i++){

        // console.log(array_values[i])
        array_values_types.push(typeof(array_values[i]))

    }

    return array_values_types;

}

console.log(arrayValuesTypes( [1, 2, "null", []]))



function main (input) {
    /**
     * Write JavaScript code from here
     */
    const lines = input.split('\n')
    //[ '4', '5 2 7 1' ]
    // console.log(lines)
    const number_of_elements = parseInt(lines[0],10)
    const array_string = lines[1]
    //need to convert the string into array
    let array_to_use = array_string.split(" ").map(Number)
    // console.log(array_to_use)

    array_to_use = array_to_use.sort((a,b) => (a-b))

    // console.log(array_to_use) //after sorting

    let median_index = Math.floor(array_to_use.length / 2)

    let median_value = array_to_use[median_index]

  

    let sum = 0

    for(let i=0;i< array_to_use.length ;i++) {
        if (array_to_use[i] < median_value){
            sum = sum + array_to_use[i]
        }
    }
    
    console.log(sum)
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

// "Problem Statement
// Write a program where user will give an array of elements. You will have to print the sum of elements where each element will be less than median element.

// Input
// The input consists of size of the array and the elements of the array. Every input will be unsigned integer number.

// Output
// The output will be sum of elements that are lesser than median element.

// Constraints
// 0 ≤ |S| ≤ 109
// Example:
// Enter size of the array and the elements.

// Input:
// 6
// 30 10 5 40 60 15
// Output:
// 30"
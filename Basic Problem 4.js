function main (input) {
    /**
     * Write JavaScript code from here //palindrome
     */
    input_string = input.toString()

    // Reverse the string
    let reversed_string = "";

    for (let i = input_string.length - 1; i >= 0; i--) {
        reversed_string += input_string[i];
    }

    if (input_string.toLowerCase() === reversed_string.toLowerCase()) {
        console.log(`${input} is a palindrome number`)
    } else {
        console.log(`${input} is not a palindrome number`)
    }
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
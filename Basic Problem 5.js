function main (input) {
    /**
     * Write JavaScript code from here // factorial 
     */
    let factorial = 1; 
    while (input > 0) {
        factorial = factorial * input; 
        input = input - 1; 
    }
    console.log(factorial);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
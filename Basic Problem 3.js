function main (input) {
    /**
     * Write JavaScript code from here
     * "toString().split('').reverse().join('');" then I need to convert back into integer with parseint"
     */
    let reversed_input = 0

    while(input > 0){
        let input_current_last_digit = ( input % 10 )

        reversed_input = (reversed_input * 10) + input_current_last_digit

        input = Math.floor(input / 10) 
    }

    console.log(reversed_input)
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
const simpleFizzBuzz = (start=1, end=100) => {

    logCallbackName("simpleFizzBuzz");

    let output;

    for (let i=start; i <= end; i++) {
        
        output = "";
        if (i % 3 === 0) output += "Fizz ";
        if (i % 5 === 0) output += "Buzz";
        if (!output) output = i;

        console.log(output);
    }
};

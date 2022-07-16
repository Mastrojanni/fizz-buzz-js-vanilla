const textIsDivisible = (dividend, divider, successText) => {

    const isDivisible = (dividend % divider) === 0;
    return (isDivisible ? successText : "");
};

const cleanerFizzBuzz = (start=1, end=100) => {

    logCallbackName("complexFizzBuzz")

    let output;

    for (let i=start; i <= end; i++) {

        output = "";
        output += textIsDivisible(i, 3, "Fizz ");
        output += textIsDivisible(i, 5, "Buzz");
        if (!output) output = i;

        console.log(output);
    }
};

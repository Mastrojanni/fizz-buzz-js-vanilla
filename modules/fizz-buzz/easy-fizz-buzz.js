const easyFizzBuzz = (start=1, end=100) => {

    logCallbackName("easyFizzBuzz");

    for (let i=start; i <= end; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            
            console.log("Fizz Buzz");
            continue;
        }

        if (i % 3 === 0) {

            console.log("Fizz");
            continue;
        }

        if (i % 5 === 0) {

            console.log("Buzz");
            continue;
        }

        console.log(i);
    }
};

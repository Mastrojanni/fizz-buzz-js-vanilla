"use strict"

// Global constants
const OUTPUT_ELEMENT_NAME = 'ul#output';
const OUTPUT_CHILD_TYPE = 'li';
const OUTPUT_RED_STYLE_NAME = 'red';
const OUTPUT_BLUE_STYLE_NAME = 'blue';


const modularFizzBuzz = (isSimple, start=1, end=100) => {

    if (!isSimple) {
        
        injectLogSeparators(() => cleanerFizzBuzz(start, end));
        return;
    }
    
    injectLogSeparators(() => simpleFizzBuzz(start, end));
};

const main = () => {

    injectLogSeparators(easyFizzBuzz);
    // modularFizzBuzz(true);
    // modularFizzBuzz();
    frontendFizzBuzz();
};

main();

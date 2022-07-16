const outputIfDivisible = () => {};

const frontendFizzBuzz = (start=1, end=100) => {

    logCallbackName("frontendFizzBuzz");

    let output;
    let styleClass;
    const outputDOMElement = getElement(OUTPUT_ELEMENT_NAME);
    if (!outputDOMElement) return false;

    for (let i=start; i <= end; i++) {
        
        output = "";
        styleClass = "";

        if (i % 3 === 0) {

            output += "Fizz ";
            styleClass += OUTPUT_RED_STYLE_NAME;
        }

        if (i % 5 === 0) {
            
            output += "Buzz";
            styleClass += OUTPUT_BLUE_STYLE_NAME;
        }

        const childDOMElement = appendToElement(outputDOMElement, 'li');
        if (!output) output = i;

        childDOMElement.innerText = output;
        addClassName(childDOMElement, styleClass);
    }

    return true;
};

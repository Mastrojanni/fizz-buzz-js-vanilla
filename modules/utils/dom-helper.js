const getElement = (elementName) => {

    if (textIsEmpty(elementName)) return false;
    const DOMElement = document.querySelector(elementName);
    
    return DOMElement;
};

const appendToElement = (parentDOMElement, targetType) => {

    if (!parentDOMElement || textIsEmpty(targetType)) return false;
    const newDOMElement = document.createElement(targetType);
    parentDOMElement.append(newDOMElement);

    return newDOMElement;
};

const addClassName = (DOMElement, className) => {

    if ( !DOMElement || textIsEmpty(className) ) return false;
    DOMElement.classList.add(className);

    return true;
};

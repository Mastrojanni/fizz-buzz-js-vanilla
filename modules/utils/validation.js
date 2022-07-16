const textIsEmpty = (text) => {

    if (typeof text !== 'string') return false;    
    const trimmedText = text.trim();
    if (trimmedText !== "") return false;

    return true;
};

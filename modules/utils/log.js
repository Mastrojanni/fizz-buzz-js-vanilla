// Global constants
const _IS_LOG_ACTIVE = true;
const _LOG_SEPARATOR = '------------------------------------------------------------';


const injectLogSeparators = (callback) => {

    if (!_IS_LOG_ACTIVE) return callback();

    console.log(_LOG_SEPARATOR);
    callback();
    console.log(_LOG_SEPARATOR);
};

const logCallbackName = (name) => {

    if (!_IS_LOG_ACTIVE) return false;
    console.log(`starting: ${name}()`);
}

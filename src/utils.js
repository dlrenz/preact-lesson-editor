
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isValidAction(action) {
    if (action===undefined || !('type' in action) || !('value' in action)) {
        console.log('Could not execute element action. A valid action is an object with properties "type" and "value".');
        console.log(action);
        return false;
    }
    if (typeof(action.type)!=='string') {
        console.log('Could not execute element action. Its "type" must be a string.');
        console.log(action);
        return false;
    }
    return true;
}


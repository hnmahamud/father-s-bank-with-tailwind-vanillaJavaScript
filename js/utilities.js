function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

function setAlert(elementId, bool) {
    const element = document.getElementById(elementId);
    if (bool === true) {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
    else {
        element.classList.remove('block');
        element.classList.add('hidden');
    }
}
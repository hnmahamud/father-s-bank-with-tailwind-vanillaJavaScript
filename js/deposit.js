const depositBtn = document.getElementById('btn-deposit');
depositBtn.addEventListener('click', function () {
    const depositElementValue = getElementValueById('deposit-number');
    const balanceElementValue = getElementValueById('balance-number');
    const depositInputFieldValue = getInputFieldValueById('deposit-field');

    if (!isNaN(depositElementValue) && !isNaN(balanceElementValue) && !isNaN(depositInputFieldValue)) {
        const depositNewValue = depositElementValue + depositInputFieldValue;
        setElementValueById('deposit-number', depositNewValue);

        const balanceNewValue = balanceElementValue + depositInputFieldValue;
        setElementValueById('balance-number', balanceNewValue);

        setAlert('deposit-alert', false);
    }
    else {
        setAlert('deposit-alert', true);
    }
});
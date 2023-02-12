const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawElementValue = getElementValueById('withdraw-number');
    const balanceElementValue = getElementValueById('balance-number');
    const withdrawInputFieldValue = getInputFieldValueById('withdraw-field');

    if (!isNaN(withdrawElementValue) && !isNaN(balanceElementValue) && !isNaN(withdrawInputFieldValue)) {
        if (balanceElementValue >= withdrawInputFieldValue) {
            const withdrawNewValue = withdrawElementValue + withdrawInputFieldValue;
            setElementValueById('withdraw-number', withdrawNewValue);

            const balanceNewValue = balanceElementValue - withdrawInputFieldValue;
            setElementValueById('balance-number', balanceNewValue);

            setAlert('withdraw-alert', false);
            setAlert('insufficient-alert', false);
        }
        else {
            setAlert('insufficient-alert', true);
        }
    }
    else {
        setAlert('withdraw-alert', true);
    }
});
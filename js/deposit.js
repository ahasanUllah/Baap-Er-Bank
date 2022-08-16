document.getElementById('btn-deposit').addEventListener('click', function(){
    let dipositAmount = document.getElementById('deposit-field')
    if(dipositAmount.value === ''){
       return alert('Please enter ammount you want to diposit')
    }
    const depositTotal = document.getElementById('deposit-total')
    const dipositValue = parseFloat(dipositAmount.value)
    let previousTotal = parseFloat(depositTotal.innerText)
    depositTotal.innerText = previousTotal + dipositValue
    // UPDATE BALANCE
    const prevBalanceString = document.getElementById('balance-total')
    const prevBalance = parseFloat(prevBalanceString.innerText);
    prevBalanceString.innerText = prevBalance + dipositValue

    // CLEAR DIPOSIT FIELD
    dipositAmount.value = '';
})
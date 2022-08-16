document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newAmmountString = document.getElementById('withdraw-field')
    const newAmmount = parseFloat(newAmmountString.value)
    if(isNaN(newAmmount) ){
        newAmmountString.value = ''
        return alert('Please enter ammount you want to withdraw')
    }
    const withdrawTotalString = document.getElementById('withdraw-total')
    const withdrawTotal = parseFloat(withdrawTotalString.innerText)
    
    

    // RECALCULATE BALANCE
    const totalBalanceString = document.getElementById('balance-total')
    const totalBalance = parseFloat(totalBalanceString.innerText)
    if(newAmmount > totalBalance){
        alert('Insufficient Balance')
        newAmmountString.value = ''
        return
    }
    withdrawTotalString.innerText = withdrawTotal + newAmmount
    totalBalanceString.innerText = totalBalance - newAmmount
    // RESET WITHDRAW FIELD
    newAmmountString.value = ''
})
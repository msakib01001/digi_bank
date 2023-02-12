document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-amount')
    const depositS = depositAmount.value
    const deposit = parseFloat(depositS)

    // get and set the value:

    const depositTotalE = document.getElementById('total-deposit')
    const depositTotalS = depositTotalE.innerText
    const depositTotalN = parseFloat(depositTotalS);

    const currentTotalDeposit = depositTotalN + deposit 
    depositTotalE.innerText = currentTotalDeposit 

    // Step 4 : add numbers total 
    const totalAmount = document.getElementById('total-amount')
    const totalAmountS = totalAmount.innerText
    const totalAmountN = parseFloat(totalAmountS);

    const currentTotalAmount = currentTotalDeposit + totalAmountN
    totalAmount.innerText = currentTotalAmount
    


    // clear Deposit:
    depositAmount.value = '';
    
})
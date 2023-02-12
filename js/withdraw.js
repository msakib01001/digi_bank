document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountS = withdrawAmount.value
    const withdrawAmountN = parseFloat(withdrawAmountS)

    // get and set the value:

    const withdrawTotalE = document.getElementById('total-withdraw')
    const withdrawTotalS = withdrawTotalE.innerText
    const withdrawTotalN = parseFloat(withdrawTotalS);

    // add total withdraw:
    const currentTotalWithdraw = withdrawTotalN + withdrawAmountN
    withdrawTotalE.innerText = currentTotalWithdraw 

    // minus the withdraw number from total numbers:
    const totalAmount = document.getElementById('total-amount')
    const totalAmountS = totalAmount.innerText
    const totalAmountN = parseFloat(totalAmountS);

    const currentTotalAmount = totalAmountN - currentTotalWithdraw 
    totalAmount.innerText = currentTotalAmount

    withdrawAmount.value = '';

})
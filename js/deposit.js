
const depositFieldValue = document.getElementById("deposit-field");

document.getElementById("deposit-btn").addEventListener("click", function () {
    if (depositFieldValue.value >= 0) {
        let depositField = document.getElementById("deposit-field");
        let depositAmount = depositField.value;
        let depositAmountNum = parseFloat(depositAmount);
        // console.log(typeof depositAmountNum);
        depositField.value = '';
        //adding money in deposit
        let displayDepositValue = document.getElementById("displayDeposit").innerText;
        const displayDepositValueNum = parseFloat(displayDepositValue);
        // console.log(typeof displayDepositValueNum)
        const totalDeposit = displayDepositValueNum + depositAmountNum;

        document.getElementById("displayDeposit").innerText = totalDeposit;
        // adding money in balance
        let displayBalanceValue = document.getElementById("displayBalance").innerText;
        const displayBalanceValueNum = parseFloat(displayBalanceValue);
        const totalBalance = displayBalanceValueNum + depositAmountNum;
        document.getElementById("displayBalance").innerText = totalBalance;
    } else {
        alert("please deposit positive value")
    }

})





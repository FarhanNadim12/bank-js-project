const withdrawFieldValue = document.getElementById("withdraw-field");

document.getElementById("withdraw-btn").addEventListener("click", function () {
    if (withdrawFieldValue.value >= 0) {
        let withdrawField = document.getElementById("withdraw-field");
        let withdrawAmount = withdrawField.value;
        let withdrawAmountNum = parseInt(withdrawAmount);
        // console.log(typeof depositAmountNum);
        withdrawField.value = '';
        //adding money in withdraw
        let displayWithdrawValue = document.getElementById("displayWithdraw").innerText;
        const displayWithdrawValueNum = parseInt(displayWithdrawValue);
        // console.log(typeof displayDepositValueNum)
        const totalWithdraw = displayWithdrawValueNum + withdrawAmountNum;

        document.getElementById("displayWithdraw").innerText = totalWithdraw;
        // adding money in balance
        let displayBalanceValue = document.getElementById("displayBalance").innerText;
        const displayBalanceValueNum = parseInt(displayBalanceValue);
        const totalBalance = displayBalanceValueNum - withdrawAmountNum;
        document.getElementById("displayBalance").innerText = totalBalance;
    } else {
        alert("please withdraw positive value")
    }

})
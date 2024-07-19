function sendMoney() {
    var enterName = document.getElementById("enterName").value.trim();
    var enterAmount = parseInt(document.getElementById("enterAmount").value.trim());
    var enterSName = document.getElementById("enterSName").value.trim();

    if (!enterName || !enterSName || isNaN(enterAmount) || enterAmount <= 0) {
        alert("Please provide valid input for all fields.");
        return;
    }

    var findSenderBankAccount = document.getElementById(enterSName + "BankBalance");
    var findUserBankAccount = document.getElementById(enterName + "BankBalance");

    if (!findSenderBankAccount) {
        alert(`Sender account with username "${enterSName}" not found.`);
        return;
    }

    if (!findUserBankAccount) {
        alert(`Recipient account with username "${enterName}" not found.`);
        return;
    }

    var enterSAmount = parseInt(findSenderBankAccount.innerText);

    if (enterAmount > enterSAmount) {
        alert("Insufficient Balance.");
    } else {
        var finalAmount = parseInt(findUserBankAccount.innerText) + enterAmount;
        var myAccountBalance = enterSAmount - enterAmount;

        findSenderBankAccount.innerText = myAccountBalance;
        findUserBankAccount.innerText = finalAmount;

        alert(`Successful Transaction !!\nRs ${enterAmount} is sent to ${enterName}@email.com.`);

        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} is sent from ${enterSName}@email.com to ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
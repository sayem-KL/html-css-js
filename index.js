// script.js

let balance = 0;
let history = [];

const balanceElement = document.getElementById("balance");
const amountElement = document.getElementById("amount");
const historyList = document.getElementById("historyList");
const notificationElement = document.getElementById("notification");

const updateBalance = () => {
    balanceElement.textContent = balance;
};

const updateHistory = () => {
    historyList.innerHTML = "";
    history.forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = transaction;
        historyList.appendChild(li);
    });
};

const showNotification = (message) => {
    notificationElement.textContent = message;
    setTimeout(() => {
        notificationElement.textContent = "";
    }, 3000);
};

const deposit = () => {
    const amount = parseFloat(amountElement.value);
    if (isNaN(amount) || amount <= 0) {
        showNotification("Please enter a valid deposit amount.");
        return;
    }
    balance += amount;
    history.push(`Deposited: ${amount} tk`);
    updateBalance();
    updateHistory();
    showNotification(`Successfully deposited tk ${amount} tk`);
    amountElement.value = "";
};

const withdraw = () => {
    const amount = parseFloat(amountElement.value);
    if (isNaN(amount) || amount <= 0) {
        showNotification("Please enter a valid withdrawal amount.");
        return;
    }
    if (amount > balance) {
        showNotification("Insufficient balance.");
        return;
    }
    balance -= amount;
    history.push(`Withdrew: ${amount} tk`);
    updateBalance();
    updateHistory();
    showNotification(`Successfully withdrew tk ${amount} tk`);
    amountElement.value = "";
};

document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawBtn").addEventListener("click", withdraw);

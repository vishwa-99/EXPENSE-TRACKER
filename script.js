let totalExpenses = 0;

document.getElementById('add-expense-btn').addEventListener('click', addExpense);

function addExpense() {
    const expenseName = document.getElementById('expense-name').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) return;

    // Update total expenses
    totalExpenses += expenseAmount;
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);

    // Create expense item
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${expenseName} - ₹${expenseAmount.toFixed(2)}`;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        totalExpenses -= expenseAmount;
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
        expenseItem.remove();
    });

    expenseItem.appendChild(deleteBtn);
    document.getElementById('expense-list').appendChild(expenseItem);

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}

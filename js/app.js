//console.log('App.js file');

document.getElementById('calculate-btn').addEventListener('click', function () {
    //console.log('Calculate Button Clicked !!!!!!!!!')

    // Food Expense: 

    const foodInputField = document.getElementById('food-expense');
    const foodExpenseString = foodInputField.value;
    const foodExpense = parseFloat(foodExpenseString);
    //console.log(foodExpense);

    foodInputField.value = foodExpense;
    foodInputField.value = '';

    // Rent Expense: 
    const rentInputField = document.getElementById('rent-expense');
    const rentExpenseString = rentInputField.value;
    const rentExpense = parseFloat(rentExpenseString);
    //console.log(rentExpense);

    rentInputField.value = rentExpense;
    rentInputField.value = '';

    // Clothes Expense:
    const clothesInputField = document.getElementById('clothes-expense');
    const clothesExpenseString = clothesInputField.value;
    const clothesExpense = parseFloat(clothesExpenseString);
    //console.log(clothesExpense);

    clothesInputField.value = clothesExpense;
    clothesInputField.value = '';

    // Total Expense:

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const totalExpenseContentField = document.getElementById('total-expense');

    totalExpenseContentField.innerText = totalExpense;




})
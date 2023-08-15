// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function topUp() {
    
    if (validate() == true) {
        var currentBalance = parseFloat(localStorage.getItem("currentBalance")) || 1000;
        var amount = parseFloat(document.getElementById("amount").value);
        var newBalance = currentBalance + amount;

        document.getElementById("moneyy").innerHTML = "$" + newBalance;
        localStorage.setItem("currentBalance", newBalance);
        
    }
}

function validate(){

    var today = new Date();

    var expiryDate = new Date(document.getElementById("expirydate").value);

    if (expiryDate < today) {
        alert("The expiry date must be after the current date.");
        return false;
    }

    var cardNumber = document.getElementById("cardinfo").value;

    if (cardNumber.length < 12 || cardNumber.length > 19) {
        alert("The card number must be between 12 and 19 digits long.");
        return false;
    }

    if (document.getElementById("name").value == "") {
        alert("Please enter name on your card.");
        return false;
    }

    if (document.getElementById("cardinfo").value == "") {
        alert("Please enter your card number.");
        return false;
    }
    if (document.getElementById("CVV").value == "") {
        alert("Please enter your CVV on your card.");
        return false;
    }
    if (document.getElementById("CVV").value.length != 3) {
        alert("The CVV number must be 3 digits long.");
        return false;
    }
    if (document.getElementById("expirydate").value == "") {
        alert("Please enter your card's expiry date.");
        return false;
    }
    return true;

}

function currentBalance() {
    
    var currentBalance = localStorage.getItem("currentBalance");

    if (currentBalance == null) {
        currentBalance = 1000.0;
        localStorage.setItem("currentBalance", currentBalance);
    } else {
        document.getElementById("moneyy").innerHTML = "$" + currentBalance;
    }
}

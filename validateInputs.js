// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function enoughmoney() {

    var currentBalance = localStorage.getItem("currentBalance");
    var transferamount = document.getElementById("transferamountid1").value;
    var currentBalanceInt = parseFloat(currentBalance);
    var transferAmountInt = parseFloat(transferamount);

    if(!validateInputs()){
        return;
    }

    if ((validateInputs() == true) && (currentBalanceInt < transferAmountInt)) {
        return window.location.href = "Unsuccessful.html";
    } else {
        currentBalance = currentBalance - transferamount;
        localStorage.setItem("currentBalance", currentBalance);
        return window.location.href = "Successful.html";
    }
}




function validateInputs() {

    if (document.getElementById("banktypeid1").value == "") {
        alert("Please enter bank type.");
        return false;
    }

    if (document.getElementById("bankaccountnumberid").value == "") {
        alert("Please enter a bank account number.");
        return false;
    }


    if (document.getElementById("recipiantbankaccountid").value == "") {
        alert("Please enter recipient's bank account number.");
        return false;
    }


    if (document.getElementById("transferamountid1").value == "") {
        alert("Please enter transfer amount.");
        return false;
    }
    if ((document.getElementById("bankaccountnumberid").value) == (document.getElementById("transferamountid1").value)) {
        alert("bank account number and recipient bank account number cannot be the same.");
        return false;
    }

    return true;

}




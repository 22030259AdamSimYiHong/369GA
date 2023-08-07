// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function resend(){
    alert("Another OTP has been sent to your number !");
}
function validatee(){
    if (document.getElementById("PINid").value == ""){
        alert("Please enter the pin that has been sent to your phone number");
        return false;
    }
    if (document.getElementById("PINid").value != ""){
        window.location.href = "money.html";
    }
}
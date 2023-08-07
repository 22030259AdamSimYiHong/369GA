// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function validatelogininfo(){

    if (document.getElementById("usernamelogin").value == "") {
        alert("Please enter a username.");
        return false;
    }

    if (document.getElementById("passwordlogin").value == "") {
        alert("Please enter a password.");
        return false;
    }

    if(document.getElementById("usernamelogin").value != "" && document.getElementById("passwordlogin").value != ""){
        window.location.href = "OTPforlogin.html";
    }

}
// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function submit() {
    if (check() == true){
    alert("Check your phone for instructions !");
    }
}
function check() {
    if (document.getElementById("phonenumberid").value == "") {
        alert("Please enter your phone number.");
        return false;
    }

    const REGEX_SINGAPORE_PHONE_NUMBER = /^[689][0-9]{7}$/;

    if (!REGEX_SINGAPORE_PHONE_NUMBER.test(document.getElementById("phonenumberid").value)) {
        alert("Please enter a valid Singaporean phone number");
        return false;
    }

    if (document.getElementById("usernameid").value == "") {
        alert("Please enter your username.");
        return false;
    }
    return true;
}

function submit2() {
    if (check2() == true){
    alert("Check your phone for instructions !");
    }
}
function check2(){
    if (document.getElementById("phonenumberid").value == "") {
        alert("Please enter your phone number.");
        return false;
    }

    const REGEX_SINGAPORE_PHONE_NUMBER = /^[689][0-9]{7}$/;

    if (!REGEX_SINGAPORE_PHONE_NUMBER.test(document.getElementById("phonenumberid").value)) {
        alert("Please enter a valid Singaporean phone number");
        return false;
    }

    if (document.getElementById("passwordid").value == "") {
        alert("Please enter your password.");
        return false;
    }
    return true;

}
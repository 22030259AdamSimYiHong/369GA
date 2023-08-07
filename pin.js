// <!--
//         I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Adam Sim Yi Hong
//  Student ID: 22030259
//  Class: E63C
//  Date/Time Last modified:8/4/2023
 
//     -->
function pinvalidate(){
    if (document.getElementById("pin").value == ""){
        alert = "Please enter pin that has been sent to your phone number";
        return false
    }
    if (document.getElementById("pin").value != ""){
        window.location.href = "login.html";
    }
}
function pin(){
    if (validate() == true){
        alert("A PIN has been sent to your phone number");
}
}
function validate(){
    if (document.getElementById("phonenumberid").value == ""){
        alert("Please enter your phone number");
        return false;
    }

    const REGEX_SINGAPORE_PHONE_NUMBER = /^[689][0-9]{7}$/;

    if (!REGEX_SINGAPORE_PHONE_NUMBER.test(document.getElementById("phonenumberid").value)) {
    alert("Please enter a valid Singaporean phone number");
    return false;
     }
     
    if (document.getElementById("usernameid").value == ""){
        alert("Please enter  username");
        return false;
    }
    if (document.getElementById("passwordid").value == ""){
        alert("Please enter  password");
        return false;
    }
    if (document.getElementById("retypeid").value == ""){
        alert("Please retype password");
        return false;
    }
    if(document.getElementById("passwordid").value != document.getElementById("retypeid").value){
        alert("password and retype password does not match");
        return false;
    }

        return true;
    
}
function resendpin(){
        alert("Another PIN has been sent to your number !");
}
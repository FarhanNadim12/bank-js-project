document.getElementById("logInBtn").addEventListener("click", function () {
    //getting email field value
    const emailField = document.getElementById("email").value;
    //getting password field value
    const passwordField = document.getElementById("password").value;
    if (emailField == "farhan@gmail.com" && passwordField == "123") {
        window.location.href = "banking.html"

    }
    else if (emailField != "farhan@gmail.com" && passwordField == "123") {
        alert("enter Valid Email Id")
    } else if (emailField == "farhan@gmail.com" && passwordField != "123") {
        alert("enter Valid password")
    } else {
        alert("enter valid email and password")
    }
})
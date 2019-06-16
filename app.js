const { app, BrowserWindow } = require('electron');

var control_minimize = document.getElementById("control-minimize");
var control_maximize = document.getElementById("control-maximize");
var control_exit = document.getElementById("control-exit");

control_minimize.addEventListener("click", () => 
{
    alert(BrowserWindow.getFocusedWindow());
});

var pinput = document.getElementById("password_input");
pinput.focus();

var password_proceed_button = document.getElementById("password-proceed-button");

password_proceed_button.addEventListener("click", () => 
{
    login();
});

pinput.addEventListener("keypress",(ev) => 
{
    if (ev.keyCode == 13)
    {
        // return pressed
        login();
    }
})

function login()
{
    var login_panel = document.getElementById("login-panel");
    // Remove the login node
    login_panel.remove();
}

// temp
login();
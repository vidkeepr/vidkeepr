

// Password Input
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

const {remote} = require("electron");
var fs = require("fs");

/* Window Control Buttons */
var control_minimize = document.getElementById("control-minimize");
var control_maximize = document.getElementById("control-maximize");
var control_maximize_icon = document.getElementById("control-maximize").children[0];
var control_exit = document.getElementById("control-exit");

control_minimize.addEventListener("click", () => 
{
    remote.BrowserWindow.getFocusedWindow().minimize();
});

control_maximize.addEventListener("click", () => 
{
    if (remote.BrowserWindow.getFocusedWindow().isMaximized())
    {
        // Restore the window
        remote.BrowserWindow.getFocusedWindow().restore();

        control_maximize_icon.classList.add("fa-window-maximize");
        control_maximize_icon.classList.remove("fa-window-restore");
    } else {
        remote.BrowserWindow.getFocusedWindow().maximize();

        control_maximize_icon.classList.add("fa-window-restore");
        control_maximize_icon.classList.remove("fa-window-maximize");
    }
});

control_exit.addEventListener("click", () => 
{
    remote.BrowserWindow.getFocusedWindow().close();
});

remote.BrowserWindow.getAllWindows()[0].on("maximize", () => 
{
    control_maximize_icon.classList.add("fa-window-restore");
    control_maximize_icon.classList.remove("fa-window-maximize");
});

remote.BrowserWindow.getAllWindows()[0].on("resize", () => 
{
    control_maximize_icon.classList.add("fa-window-maximize");
    control_maximize_icon.classList.remove("fa-window-restore");
});

// Top menu bar actions
var quick_hide_command_text = document.getElementById("quick-hide-command-text");
quick_hide_command_text.addEventListener("click", () =>
{
    // Hide the focused window
    remote.BrowserWindow.getFocusedWindow().hide();
});


// Loading settings
const config_filename = "./config.json";
var settings = null;

fs.exists(config_filename, (exists) => 
{
    if (exists)
    {
        fs.readFile(config_filename, (err, data) => 
        {
            if (!err)
            {
                settings = JSON.parse(data);
            }
        });
    } else {
        fs.writeFile(config_filename, JSON.stringify(getDefaultSettings()), (err) => 
        {
            settings = getDefaultSettings();
        });
    }
});

function getDefaultSettings()
{
    return {
        stars : 
        [
            {
                "name" : "Angela White",
                "sex" : "Female",
                "birthday" : "",
                "weight" : "65 kg",
                "hair" : "Curly, Long",
                "skin" : "White",
                "race" : "Caucasian",
                "body" : "Fit",
                "boobs" : "Big, Natural",
                "height" : "5\"7'"
            }
        ],
        brands : 
        [
            {
                "id" : 1,
                "name" : "Brazzers",
                "description" : "The best and the one and only niggas",
                "icon" : "123980238490234.jpeg"
            },
            {
                "id" : 2,
                "name" : "NaughtyAmerica",
                "description" : "The best and the one and only niggas",
                "icon" : "123980238490234.jpeg"
            }
        ],
        photos : [],
        videos : 
        [
            {
                "title" : "Best pron in the world",
                "filename" : "8950331.mp4",
                "rating" : 4.8,
                "brand" : 1,
                "positions" : [1,2,3,4],
                "categories" : [2,3,5,6]
            }
        ],
        categories : 
        [
            {
                "id" : 1,
                "title" : "Mature"
            },
            {
                "id" : 2,
                "title" : "Thingy"
            },
            {
                "id" : 3,
                "title" : "Data"
            },
        ],
        positions :
        [
            {
                "id" : 1,
                "title" : "69",
                "image" : "892035.jpeg"
            },
            {
                "id" : 2,
                "title" : "Missionary",
                "image" : "89203523.jpeg"
            }
        ],
        password : "xasx/+=182912h3987hushdla9d32yhda"
    };
}
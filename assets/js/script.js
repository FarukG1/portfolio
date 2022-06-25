// get the buttons
var filesbtn = document.getElementById("files-button");
var downloadbtn = document.getElementById("download-button");
var githubbtn = document.getElementById("github-button");
// get the tabs
var files = document.getElementById("files");
var download = document.getElementById("download");
var github = document.getElementById("github");

window.onload = function() {
    files.style.display = "block";
    download.style.display = "none";
    github.style.display = "none";
};
function ChangeToFiles() {
    // Change other buttons
    downloadbtn.classList.remove("icons-active");
    downloadbtn.classList.add("icons-deactive");
    githubbtn.classList.remove("icons-active");
    githubbtn.classList.add("icons-deactive");
    // Change this button
    filesbtn.classList.remove("icons-deactive");
    filesbtn.classList.add("icons-active");
    // change to files
    if(files.style.display == "none"){
        files.style.display = "block";
        // "disable" other views
        download.style.display = "none";
        github.style.display = "none";
    } else {
        files.style.display = "none";
    }
}

function ChangeToDownload() {
    // Change other buttons
    filesbtn.classList.remove("icons-active");
    filesbtn.classList.add("icons-deactive");
    githubbtn.classList.remove("icons-active");
    githubbtn.classList.add("icons-deactive");
    // Change this button
    downloadbtn.classList.remove("icons-deactive");
    downloadbtn.classList.add("icons-active");
    // change to files
    if(download.style.display == "none"){
        download.style.display = "block";
        // "disable" other views
        files.style.display = "none";
        github.style.display = "none";
    } else {
        download.style.display = "none";
    }
}

function ChangeToGithub() {
    // Change other buttons
    filesbtn.classList.remove("icons-active");
    filesbtn.classList.add("icons-deactive");
    downloadbtn.classList.remove("icons-active");
    downloadbtn.classList.add("icons-deactive");
    // Change this button
    githubbtn.classList.remove("icons-deactive");
    githubbtn.classList.add("icons-active");
    // change to files
    if(github.style.display == "none"){
        github.style.display = "block";
        // "disable" other views
        files.style.display = "none";
        download.style.display = "none";
    } else {
        github.style.display = "none";
    }
}
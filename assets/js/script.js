// get the buttons
var filesbtn = document.getElementById("files-button");
var downloadbtn = document.getElementById("download-button");
var githubbtn = document.getElementById("github-button");

var aboutmeTab = document.getElementById("aboutme-tab");
var aboutmeDiv = document.getElementById("aboutme-div");

var projectsTab = document.getElementById("projects-tab");
var projectsDiv = document.getElementById("projects-div");

var contactTab = document.getElementById("contact-tab");
var contactDiv = document.getElementById("contact-div");

// get the tabs
var files = document.getElementById("files");
var download = document.getElementById("download");
var github = document.getElementById("github");
// get the files
var aboutme = document.getElementById("aboutme-section");
var projects = document.getElementById("projects-section");
var contact = document.getElementById("contact-section");


window.onload = function() {
    files.style.display = "block";
    aboutme.style.display = "block";
    aboutmeDiv.style.display = "block";
};
function Files() {
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
function Download() {
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
function Github() {
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
function AboutMeOpen() {
    // Change project buttons
    projectsTab.classList.remove("icons-active");
    projectsTab.classList.add("icons-deactive");
    projectsDiv.classList.remove("div-active");
    projectsDiv.classList.add("div-deactive");
    // Change contact buttons
    contactTab.classList.remove("icons-active");
    contactTab.classList.add("icons-deactive");
    contactDiv.classList.remove("div-active");
    contactDiv.classList.add("div-deactive");
    // Change Tab button
    aboutmeTab.classList.remove("icons-deactive");
    aboutmeTab.classList.add("icons-active");
    // Change Div Button
    aboutmeDiv.classList.remove("div-deactive");
    aboutmeDiv.classList.add("div-active");
    aboutmeDiv.style.display = "block";
    // change to files
    aboutme.style.display = "block";
    // "disable" other views
    projects.style.display = "none";
    contact.style.display = "none";
}
function AboutMeClose() {
    // Change Tab button
    aboutmeTab.classList.remove("icons-active");
    aboutmeTab.classList.add("icons-deactive");
    // Change Div button
    aboutmeDiv.classList.remove("div-active");
    aboutmeDiv.classList.add("div-deactive");
    aboutmeDiv.style.display = "none";
    // close aboutme
    aboutme.style.display = "none";
}
function ProjectsOpen() {
    // Change project buttons
    aboutmeTab.classList.remove("icons-active");
    aboutmeTab.classList.add("icons-deactive");
    aboutmeDiv.classList.remove("div-active");
    aboutmeDiv.classList.add("div-deactive");
    // Change contact buttons
    contactTab.classList.remove("icons-active");
    contactTab.classList.add("icons-deactive");
    contactDiv.classList.remove("div-active");
    contactDiv.classList.add("div-deactive");
    // Change Tab button
    projectsTab.classList.remove("icons-deactive");
    projectsTab.classList.add("icons-active");
    // Change Div Button
    projectsDiv.classList.remove("div-deactive");
    projectsDiv.classList.add("div-active");
    projectsDiv.style.display = "block";
    // change to files
    projects.style.display = "block";
    // "disable" other views
    aboutme.style.display = "none";
    contact.style.display = "none";
}
function ProjectsClose() {
    // Change Tab button
    projectsTab.classList.remove("icons-active");
    projectsTab.classList.add("icons-deactive");
    // Change Div button
    projectsDiv.classList.remove("div-active");
    projectsDiv.classList.add("div-deactive");
    projectsDiv.style.display = "none";
    // close aboutme
    projects.style.display = "none";
}
function ContactOpen() {
    // Change project buttons
    aboutmeTab.classList.remove("icons-active");
    aboutmeTab.classList.add("icons-deactive");
    aboutmeDiv.classList.remove("div-active");
    aboutmeDiv.classList.add("div-deactive");
    // Change contact buttons
    projectsTab.classList.remove("icons-active");
    projectsTab.classList.add("icons-deactive");
    projectsDiv.classList.remove("div-active");
    projectsDiv.classList.add("div-deactive");
    // Change Tab button
    contactTab.classList.remove("icons-deactive");
    contactTab.classList.add("icons-active");
    // Change Div Button
    contactDiv.classList.remove("div-deactive");
    contactDiv.classList.add("div-active");
    contactDiv.style.display = "block";
    // change to files
    contact.style.display = "block";
    // "disable" other views
    aboutme.style.display = "none";
    projects.style.display = "none";
}
function ContactClose() {
    // Change Tab button
    contactTab.classList.remove("icons-active");
    contactTab.classList.add("icons-deactive");
    // Change Div button
    contactDiv.classList.remove("div-active");
    contactDiv.classList.add("div-deactive");
    contactDiv.style.display = "none";
    // close aboutme
    contact.style.display = "none";
}

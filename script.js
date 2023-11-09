//#region Personal Profile Loader
var load = true;
loadProfile(load);
var loadedProjects, loadedCertificates, loadedExperience, loadedAchievements, loadedGallery, loadedSkills;
var nolink = '#';

function loadProfile(load) {
    if (!load) return;

    document.getElementById("personal-image").src = "https://pbs.twimg.com/profile_images/1571236186072440832/N8QWVVXO_400x400.jpg";
    document.getElementById("full-name").innerHTML = "Abdullah Al-Mousawi";
    document.getElementById("occupation").innerHTML = "Computer Scientist";
    document.getElementById('contact-info').innerHTML = "<a href='mailto:mr.abdullahalmousawi@gmail.com'>mr.abdullahalmousawi@gmail.com</a>";

    var username = 'AbdullaMousawi';
    document.getElementById("twitter-link").href = 'http://twitter.com/' + username;
    document.getElementById("instagram-link").style.display = "none";
    document.getElementById("instagram-link").href = 'http://instagram.com/' + username;
    document.getElementById("linkedin-link").href = 'http://linkedin.com/in/' + username;
    document.getElementById("github-link").href = 'http://github.com/' + username;
}

function loadProjects() {
    if (loadedProjects || !load) return;
    loadedProjects = true;

    var list = document.getElementById("projects-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-folder fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + 'abdullamousawi.github.io/portfolio/' + presets[1] + 'My Personal Portfolio - Web (This)' + presets[2],
        presets[0] + 'hypedcloud.itch.io/rhombus' + presets[1] + 'Rhombus - Video Game (Game Jam)' + presets[2],
        presets[0] + 'hypedcloud.itch.io/two-eyes' + presets[1] + 'Two Eyes - Video Game Prototype (Game Jam)' + presets[2],
        presets[0] + 'https://play.google.com/store/apps/details?id=com.HypedCloud.TwoEyes' + presets[1] + 'Two Eyes - Video Game (Android)' + presets[2],
        presets[0] + 'https://apps.apple.com/us/app/two-eyes-game/id6462434578' + presets[1] + 'Two Eyes - Video Game (iOS)' + presets[2],
        presets[0] + 'hypedcloud.itch.io/one-click-away' + presets[1] + 'One Click Away - Video Game (Game Jam)' + presets[2],
        presets[0] + nolink + presets[1] + 'CS Coach - Video Game (Senior Project)' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}
function loadCertificates() {
    if (loadedCertificates || !load) return;
    loadedCertificates = true;

    var list = document.getElementById("certificates-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-certificate fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + nolink + presets[1] + 'Cisco - IT Essentials (2021)' + presets[2],
        presets[0] + nolink + presets[1] + 'Cisco - Linux Essentials (2021)' + presets[2],
        presets[0] + nolink + presets[1] + 'Cisco - Networking Essentials (2022)' + presets[2],
        presets[0] + nolink + presets[1] + 'Cisco - Cybersecurity Essentials (2023)' + presets[2],
        presets[0] + 'udemy.com/certificate/UC-6425ab77-a05b-4843-8452-86978cfa66e3/' + presets[1] + 'Udemy - C# Advanced Topics: Prepare for Technical Interviews (2023)' + presets[2],
        presets[0] + nolink + presets[1] + 'PMU CCES Senior Project - #1 Software Project Winner (2023)' + presets[2],
        presets[0] + 'typing.com/student/verify#206594028-133771923' + presets[1] + 'Typing.com - 1 Minute Typing Test (2022)' + presets[2],
        presets[0] + nolink + presets[1] + 'Harvard ManageMentor - Business Plan Development (2022)' + presets[2],
        presets[0] + nolink + presets[1] + 'Harvard ManageMentor - Strategic Thinking (2022)' + presets[2],
        presets[0] + nolink + presets[1] + 'Harvard ManageMentor - Project Management (2022)' + presets[2],
        presets[0] + nolink + presets[1] + 'Harvard ManageMentor - Team Creation (2022)' + presets[2],
        presets[0] + 'linkedin.com/in/abdullamousawi/overlay/1635500353415/single-media-viewer/' + presets[1] + 'Saudi Aramco - University Internship Program (2022)' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}
function loadExperience() {
    if (loadedExperience || !load) return;
    loadedExperience = true;

    var list = document.getElementById("experience-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-brain fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + 'linkedin.com/in/abdullamousawi/overlay/1635500353415/single-media-viewer/' + presets[1] + 'Saudi Aramco University Internship Program (June 20, 2022 - August 25, 2022)' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}
function loadAchievements() {
    if (loadedAchievements || !load) return;
    loadedAchievements = true;

    var list = document.getElementById("achievements-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-trophy fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + 'charity-run.com/results-2019/' + presets[1] + 'Participated in the Annual Charity Run (2019)' + presets[2],
        presets[0] + 'itch.io/jam/brackeys-4/rate/721935' + presets[1] + 'Brackeys Game Jam 2020 - 6th Place in Game Design Carteria' + presets[2],
        presets[0] + nolink + presets[1] + 'PMU CCES Senior Project - #1 Software Project Winner (2023)' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}
function loadGallery() {
    if (loadedGallery || !load) return;
    loadedGallery = true;

    var list = document.getElementById("gallery-view");
    list.innerHTML = "";
    altTextTag = '?alt';
    var items = [
        'assets/images/gallery/2019-charityRun-1.jpeg' + altTextTag + 'Annual Charity Run (2019)',
        'assets/images/gallery/2019-charityRun-2.jpeg' + altTextTag + 'Annual Charity Run (2019)',
        'assets/images/gallery/2019-charityRun-3.jpeg' + altTextTag + 'Annual Charity Run (2019)',
    ]

    items.forEach(item => {
        var img = document.createElement("img");
        img.id = "gellery-image";
        attributes = item.split(altTextTag);
        img.src = attributes[0];
        img.alt = attributes[1];
        list.appendChild(img);
        img.onclick = function() { showModal(img); };
    });
}
function loadSkills() {
    if (loadedSkills || !load) return;
    loadedSkills = true;

    var list = document.getElementById("skills-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-star fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + nolink + presets[1] + 'Object Oriented Programming Languages' + presets[2],
        presets[0] + nolink + presets[1] + 'Database Management (SQL)' + presets[2],
        presets[0] + nolink + presets[1] + 'Web Programming & Design' + presets[2],
        presets[0] + nolink + presets[1] + 'Game Design & Development (Unity Engine)' + presets[2],
        presets[0] + nolink + presets[1] + '.NET Core & Framework' + presets[2],
        presets[0] + nolink + presets[1] + 'Linux & Bash Shell' + presets[2],
        presets[0] + nolink + presets[1] + 'Microsoft Excel, Word, PowerPoint, and Power BI' + presets[2],
        presets[0] + nolink + presets[1] + 'Graphic Design (Figma and Corel Vector)' + presets[2],
        presets[0] + 'typing.com/student/verify#206594028-133771923' + presets[1] + 'Typing 60WPM (96% Accuracy) on a keyboard' + presets[2],
        presets[0] + nolink + presets[1] + 'Algorithm Thinking & Problem Solving' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}
//#endregion

//#region Page Functionalities

//--- Lists appearance toggeling
function toggleAppearance(viewId, cellId) {
    var viewElement = document.getElementById(viewId);
    var cellElement = document.getElementById(cellId);

    cellElement.style.width = (cellElement.style.width != "100%" ? "100%" : "25%");
    
    cellElement.style.borderRadius = (cellElement.style.width == "100%" ? "0" : "12px");
    if (cellElement.style.width == "100%")
    {
        cellElement.style.borderTopLeftRadius = "12px";
        cellElement.style.borderTopRightRadius = "12px";
    }

    cellElement.style.margin = (cellElement.style.width == "100%" ? "0" : "5px");

    viewElement.style.display = (viewElement.style.display != "block" ? "block" : "none");

    for (let i = 1; i <= 6; i++) {
        var cell = "cell-" + i;
        var celment = document.getElementById(cell);

        if (viewElement.style.display == "block" && cell != cellId)
            celment.style.display = "none";
        else
            celment.style.display = "inline-block";
    }
}

//--- Gallery Images Modal
var modal = document.getElementById("image-modal");
var modalImage = document.getElementById("modal-image");
var modalCaptionText = document.getElementById("modal-caption");

document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id === "gallery-image") {
        alert("Test");
        modal.style.display = "block";
        modalImage.src = elem.dataset.biggerSrc || elem.src;
        modalCaptionText.innerHTML = elem.alt;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = modal.onclick = function() { hideModal() };

function showModal(selectedImage) {
    modal.style.display = "block";
    modalImage.src = selectedImage.dataset.biggerSrc || selectedImage.src;
    modalCaptionText.innerHTML = selectedImage.alt;
};
function hideModal() { modal.style.display = "none"; };
//#endregion

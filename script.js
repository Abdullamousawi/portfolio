var load = true;
loadProfile(load);
var loadedProjects, loadedCertificates, loadedExperience, loadedAchievements, loadedGallery, loadedSkills;
var nolink = 'abdullamousawi.github.io/portfolio/';

function toggleAppearance(viewId, cellId) {
    var viewElement = document.getElementById(viewId);
    var cellElement = document.getElementById(cellId);

    cellElement.style.width = (cellElement.style.width != "100%" ? "100%" : "25%");
    cellElement.style.borderRadius = (cellElement.style.width == "100%" ? "0" : "12px");
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

function loadProfile(load) {
    if (!load) return;

    document.getElementById("personal-image").src = "https://pbs.twimg.com/profile_images/1548890039047831554/DfRG8VMD_400x400.jpg";
    document.getElementById("full-name").innerHTML = "Abdullah Al-Mousawi";
    document.getElementById("occupation").innerHTML = "CS Student & Game Developer";
    document.getElementById('contact-info').innerHTML = "<a href='mailto:abdullah982@pm.me'>abdullah982@pm.me</a>";

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
        presets[0] + 'abdullamousawi.github.io/portfolio/' + presets[1] + 'My Personal Portfolio - Web' + presets[2],
        presets[0] + 'hypedcloud.itch.io/rhombus' + presets[1] + 'Rhombus - Video Game' + presets[2],
        presets[0] + 'hypedcloud.itch.io/two-eyes' + presets[1] + 'Two Eyes - Video Game' + presets[2],
        presets[0] + 'hypedcloud.itch.io/one-click-away' + presets[1] + 'One Click Away - Video Game' + presets[2],
        presets[0] + 'play.google.com/store/apps/details?id=com.MousawiDev.Horizontal' + presets[1] + 'Horizontal - Video Game' + presets[2],
        presets[0] + 'play.google.com/store/apps/details?id=com.MousawiDev.Vertical' + presets[1] + 'Vertical - Video Game' + presets[2],
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
        presets[0] + 'typing.com/student/verify#206594028-133771923' + presets[1] + 'Typing.com - 1 Minute Typing Test (2022)' + presets[2],
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
        presets[0] + nolink + presets[1] + 'Saudi Aramco University Summer Internship Program (2022)' + presets[2],
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
    var items = [
        'assets/images/gallery/2019-charityRun-1.jpeg',
        'assets/images/gallery/2019-charityRun-2.jpeg',
        'assets/images/gallery/2019-charityRun-3.jpeg',
    ]

    items.forEach(item => {
        var img = document.createElement("img");
        img.src = item;
        list.appendChild(img);
    });
}
function loadSkills() {
    if (loadedSkills || !load) return;
    loadedSkills = true;

    var list = document.getElementById("skills-view").getElementsByTagName("ul")[0];
    list.innerHTML = "";
    var presets = ['<a href="http://', '" target="_blank"><span class="fa-li"><i class="fa-solid fa-star fa-lg"></i></span>', '</a>'];
    var items = [
        presets[0] + 'github.com/AbdullaMousawi' + presets[1] + 'Object Oriented Programming Languages' + presets[2],
        presets[0] + 'github.com/AbdullaMousawi' + presets[1] + 'Database Management (SQL)' + presets[2],
        presets[0] + 'github.com/AbdullaMousawi' + presets[1] + 'Web Programming & Design' + presets[2],
        presets[0] + 'github.com/AbdullaMousawi' + presets[1] + 'Game Design & Development (Unity Engine)' + presets[2],
        presets[0] + 'github.com/AbdullaMousawi' + presets[1] + '.NET Core & Framework' + presets[2],
        presets[0] + nolink + presets[1] + 'Linux & Bash Shell' + presets[2],
        presets[0] + nolink + presets[1] + 'Microsoft Excel, Word, PowerPoint, and Power BI' + presets[2],
        presets[0] + nolink + presets[1] + 'Graphic Design (Adobe XD, and Gravit Designer)' + presets[2],
        presets[0] + 'typing.com/student/verify#206594028-133771923' + presets[1] + 'Typing 60WPM (96% Accuracy) on a keyboard' + presets[2],
        presets[0] + nolink + presets[1] + 'Algorithm Thinking & Problem Solving' + presets[2],
    ]

    items.forEach(item => {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
}

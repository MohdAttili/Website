function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    var hamburger = document.getElementById("hamburger");
    var container = document.getElementById("links-container");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        container.style.display = 'none'
        hamburger.innerHTML = "&#9776;"; 
    } else {
        sidebar.style.width = "250px";
        container.style.display = 'block'
        hamburger.innerHTML = "&#10005;";
    }
}
document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("mySidebar");
    var hamburger = document.getElementById("hamburger");

    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.style.width = "0";
        document.getElementById("links-container").style.display = 'none';
        hamburger.innerHTML = "&#9776;";
    }
});


function toggleLanguage() {
    let currentURL = window.location.href;

    if (currentURL.includes(".html")) {
        let htmlIndex = currentURL.indexOf(".html");

        if (currentURL.slice(htmlIndex - 3, htmlIndex) === "Eng") {
            currentURL = currentURL.slice(0, htmlIndex - 3) + currentURL.slice(htmlIndex);
        } else {
            currentURL = currentURL.slice(0, htmlIndex) + "Eng" + currentURL.slice(htmlIndex);
        }
    }

    window.location.href = currentURL;
}



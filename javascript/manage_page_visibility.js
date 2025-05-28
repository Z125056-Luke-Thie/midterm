var currentPage = "home";
document.getElementById("header_home_button").style.fontSize = "35px";

async function loadPage(pageName) {
    var lastPage = currentPage;
    var nextPage = pageName;

    document.getElementById("page_" + lastPage).style.display = "none";
    document.getElementById("header_" + lastPage + "_button").style.fontSize = "30px";
    document.getElementById("header_" + lastPage + "_button").style.fontWeight = "normal";

    document.getElementById("page_" + nextPage).style.display = "block";
    document.getElementById("header_" + nextPage + "_button").style.fontSize = "40px";
    document.getElementById("header_" + nextPage + "_button").style.fontWeight = "bold";

    currentPage = pageName;
}
var currentPage = "home";
document.getElementById("header_home_button").style.fontSize = "35px";

var about_texts = [
    'ABOUT ME',
    'Who am I?',
    'I hear you asking',
    'Yes I am Luke',
    'As you know',
    'If you paid attention...',
    'But let me elaborate',
    'ABOUT ME',]

const about_arrayLength = about_texts.length;

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

    if(currentPage === "about"){
        for (let i = 0; i < about_arrayLength; i++) {
            const addedText = document.getElementById("about_title");
            addedText.innerHTML = about_texts[i];
            addedText.className = "homeText";

            // Trigger fade-in
            await delay(100); // wait for DOM to render
            addedText.classList.add("homeText-fade_in");

            // Wait before fade out
            await delay(1000); // show duration

            if (i < about_arrayLength - 1) {
                // Fade out and remove
                addedText.classList.remove("homeText-fade_in");
                addedText.classList.add("homeText-fade_out");
                await delay(1000); // wait for fade out transition
            }
            else {
                addedText.classList.add("homeText-background");
            }
        }
    }
}
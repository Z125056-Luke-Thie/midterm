var texts = [
    'I AM lUKE',
    'WELCOME TO MY PORTFOLIO',
    'TAKE A LOOK AROUND']

var textsBackup = [
    'WELCOME TO MY PORTFOLIO' ,
    'I AM lUKE',
    'A 25 year old charming guy ;)',
    'Take a look around',
    'And get to know me',
    'WELCOME']

const arrayLength = texts.length;

async function showTexts() {
    const container = document.getElementById("home-container");

    for (let i = 0; i < arrayLength; i++) {
        const addedText = document.createElement("h1");
        addedText.innerHTML = texts[i];
        addedText.className = "homeText";
        container.appendChild(addedText);

        // Trigger fade-in
        await delay(100); // wait for DOM to render
        addedText.classList.add("homeText-fade_in");

        // Wait before fade out
        await delay(1000); // show duration

        if (i < arrayLength - 1) {
            // Fade out and remove
            addedText.classList.remove("homeText-fade_in");
            addedText.classList.add("homeText-fade_out");
            await delay(1000); // wait for fade out transition
            container.removeChild(addedText);
        }
        else {
            addedText.classList.add("homeText-background");
        }
    }

    const header = document.querySelector(".header-container");
    header.style.display = "flex";
    await delay(50);
    header.classList.add("header-container_visible");

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

showTexts();



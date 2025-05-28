function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleVisibility(containerId, oldElId, newElId) {
    const container = document.getElementById(containerId);
    const oldItem = document.getElementById(oldElId);
    const newItem = document.getElementById(newElId);

    const currentHeight = container.offsetHeight;

    // Prepare new item (make it temporarily visible to measure)
    newItem.style.display = 'block';
    newItem.classList.add('item-hidden'); // still hidden
    const newHeight = newItem.offsetHeight;
    newItem.style.display = 'none';

    // Set container to fixed height to allow transition
    container.style.height = currentHeight + 'px';

    // Fade out old item if it exists
    if (oldItem) {
        oldItem.classList.remove('item-visible');
        oldItem.classList.add('item-hidden');
        await delay(500);
        oldItem.style.display = 'none'; // Remove from layout after fade-out
    }

    // Fade in new item
    if (newItem) {
        newItem.style.display = 'flex'; // Add to layout before fade-in
        // Start hidden class is already applied — force reflow to restart transition
        void newItem.offsetWidth;
        newItem.classList.remove('item-hidden');
        newItem.classList.add('item-visible');
    }

    // Animate height change
    container.style.height = newHeight + 'px';
    await delay(500); // match transition duration

    // Remove inline height to return to auto layout
    container.style.height = 'auto';
}

async function handleVisibilityImageContainer(imageContainerId) {
    let imageContainer = document.getElementById(imageContainerId);

    // Fade out old item if it exists
    if (imageContainer) {
        imageContainer.classList.remove('item-visible');
        imageContainer.classList.add('item-hidden');
        await delay(500);
        imageContainer.style.display = 'none'; // Remove from layout after fade-out
    }

    document.getElementById('projects-image_container-0').style.backgroundImage = "url('imgs/" + value + "-1.png')";
    document.getElementById('projects-image_container-1').style.backgroundImage = "url('imgs/" + value + "-2.png')";
    document.getElementById('projects-image_container-2').style.backgroundImage = "url('imgs/" + value + "-3.png')";

    // Fade in new item
    if (imageContainer) {
        imageContainer.style.display = 'flex'; // Add to layout before fade-in
        // Start hidden class is already applied — force reflow to restart transition
        void imageContainer.offsetWidth;
        imageContainer.classList.remove('item-hidden');
        imageContainer.classList.add('item-visible');
    }
}

async function handleVisibilitySingleItem(singleItemId) {
    let singleItem = document.getElementById(singleItemId);

    // Fade out old item if it exists
    if (singleItem) {
        singleItem.classList.remove('item-visible');
        singleItem.classList.add('item-hidden');
        await delay(500);
        singleItem.style.display = 'none'; // Remove from layout after fade-out
    }

    // Fade in new item
    if (singleItem) {
        singleItem.style.display = 'flex'; // Add to layout before fade-in
        // Start hidden class is already applied — force reflow to restart transition
        void singleItem.offsetWidth;
        singleItem.classList.remove('item-hidden');
        singleItem.classList.add('item-visible');
    }
}

async function handleVisibilitySingleItemAppear(singleItemId) {
    let singleItem = document.getElementById(singleItemId);

    // Fade in new item
    if (singleItem) {
        singleItem.style.display = 'flex'; // Add to layout before fade-in
        // Start hidden class is already applied — force reflow to restart transition
        void singleItem.offsetWidth;
        singleItem.classList.remove('item-hidden');
        singleItem.classList.add('item-visible');
    }
}

async function handleVisibilitySingleItemDisappear(singleItemId) {
    let singleItem = document.getElementById(singleItemId);

    // Fade out old item if it exists
    if (singleItem) {
        singleItem.classList.remove('item-visible');
        singleItem.classList.add('item-hidden');
        await delay(500);
        singleItem.style.display = 'none'; // Remove from layout after fade-out
    }
}
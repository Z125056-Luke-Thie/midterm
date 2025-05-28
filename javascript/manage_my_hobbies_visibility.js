var lastSelectedHobby = "";

function manageMyHobbiesVisibility(hobbies_selected) {
    handleVisibility('my_hobbies','my_hobbies-choose_section', hobbies_selected);

    lastSelectedHobby = hobbies_selected;

    handleVisibilitySingleItemAppear('my_hobbies-back');

    let  selectedHobby = "";

    switch(hobbies_selected){
        case "my_hobbies-cars":
            selectedHobby = "Cars";
            break;
        case "my_hobbies-music":
            selectedHobby = "Music";
            break;
        case "my_hobbies-gaming":
            selectedHobby = "Gaming";
            break;
    }

    document.getElementById('my_hobbies-title').innerText = "My Hobbies - " + selectedHobby;
}

function manageMyHobbiesBack() {
    handleVisibility("my_hobbies", lastSelectedHobby, 'my_hobbies-choose_section');
    handleVisibilitySingleItemDisappear('my_hobbies-back');
    document.getElementById('my_hobbies-title').innerText = "My Hobbies";
}
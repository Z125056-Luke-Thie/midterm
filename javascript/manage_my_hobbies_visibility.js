var lastSelectedHobby = "";

function manageMyHobbiesVisibility(hobbies_selected) {
    handleVisibility('my_hobbies','my_hobbies-choose_section', hobbies_selected);

    lastSelectedHobby = hobbies_selected;

    document.getElementById('my_hobbies-title - ' + hobbies_selected)
}

function manageMyHobbiesBack() {
    handleVisibility("my_hobbies", lastSelectedHobby, 'my_hobbies-choose_section');
}
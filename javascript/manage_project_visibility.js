var lastProjectvalue = "default";

var value = "";

manageProjectVisibility();

function manageProjectVisibility () {
    var selectedProject = document.getElementById("projects-item_selector");
    value = selectedProject.value;

    handleVisibility("projects-text_container", "project-text-" + lastProjectvalue, "project-text-" + value);

    handleVisibilityImageContainer("projects-image_container");

    lastProjectvalue = value;
}

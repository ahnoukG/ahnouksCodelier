function changeContent(id, divId) {

    //Font weight change.
    const elementId = document.getElementById(id);
    //Read all the <a> labels in the div to make the font weight bold to normal.
    document.querySelectorAll(".nav-element")
    .forEach(element => element.style.fontWeight = "normal");
    //Font weight to bold when click. 
    elementId.style.fontWeight = "bold"; 


    // Change div animation
    const selectedDiv = document.getElementById(divId);
    const displayType = selectedDiv.dataset.display;
    const homeMenu = document.getElementById('home-menu-id');
    const sectionsContent = document.querySelectorAll('.sections-content');

    let currentVisible = null;

    // Find the currently visible section.
    sectionsContent.forEach(section => {
        if (getComputedStyle(section).display !== "none") {
            currentVisible = section;
        }
    });

    // If the selected one is already showing, do nothing.
    if (currentVisible === selectedDiv) return;

    // If there's a visible section, fade it out first.
    if (currentVisible) {
        currentVisible.style.transition = "opacity 0.5s ease-in-out";
        currentVisible.style.opacity = "0";

        currentVisible.addEventListener("transitionend", function handler() {
            currentVisible.style.display = "none";
            currentVisible.removeEventListener("transitionend", handler);

            // Show the selected section.
            showselectedDiv(selectedDiv, displayType);
        });
    } else {
        // If none are visible, just show the new one.
        showselectedDiv(selectedDiv, displayType);
    } 

    function showselectedDiv(section, displayType) {
        section.style.display = displayType;
        section.style.opacity = "0";

        setTimeout(() => {
            section.style.transition = "opacity 0.5s ease-in-out";
            section.style.opacity = "1";
        }, 50);
    }
}

function setActiveProjects(button,selectedProjectId) {
    const buttonProject = document.querySelectorAll(".projects-button");

    // Set and unset active status in button
    buttonProject.forEach(button => button.classList.remove("active"));
    button.classList.add("active");

    const selectedProject = document.getElementById(selectedProjectId);

    const allProjects = document.querySelectorAll('.projects-menu');
    allProjects.forEach(projectMenu => {
        projectMenu.style.display = "none";

        setTimeout(() => {
            projectMenu.style.transition = "opacity 0.6s ease-in-out";
            projectMenu.style.opacity = "0";
        }, 80);
    });

    selectedProject.style.display = "block";

    setTimeout(() => {
        selectedProject.style.transition = "opacity 0.6s ease-in-out";
        selectedProject.style.opacity = "1";
    }, 80);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("models-3d-menu");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0";
    }

    slides[slideIndex-1].style.display = "grid";
    setTimeout(() => {
        slides[slideIndex-1].style.transition = "opacity 0.6s ease-in-out";
        slides[slideIndex-1].style.opacity = "1";
    }, 80);
}

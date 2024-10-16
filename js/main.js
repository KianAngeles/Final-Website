/* SIDE BAR FOR HEADER */
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.left-sidebar');


menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    
    if (!isClickInsideSidebar && !isClickOnToggle) {
        sidebar.classList.remove('active');
    }
});

/* HEAD NUTRITION */
// Select the Nutrition arrow container and the nutrition list
const nutritionToggle = document.querySelector('.nutrition-toggle');
const nutritionList = document.querySelector('.nutrition-list');
const arrowIcon = nutritionToggle.querySelector('.mobile-arrows'); 

// Toggle functionality for the Nutrition list and arrow
nutritionToggle.addEventListener('click', () => {
    nutritionList.classList.toggle('show'); // Toggle visibility
    arrowIcon.classList.toggle('active');   // Rotate arrow
});

// ABOUT SECTION
const aboutToggle = document.querySelector('.about-toggle');
const aboutList = document.querySelector('.about-list');
const aboutArrowIcon = aboutToggle.querySelector('.mobile-arrows'); 

// Toggle functionality for the About list and arrow
aboutToggle.addEventListener('click', () => {
    aboutList.classList.toggle('show');
    aboutArrowIcon.classList.toggle('active');
});



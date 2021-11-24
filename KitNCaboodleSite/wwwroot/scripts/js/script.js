/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("navBar").style.display = "flex";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("navBar").style.display = "none";
}

$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() >= 1075) {
            openNav();
        }
    });
    $(window).resize(function () {
        if ($(this).width() < 1075) {
            closeNav();
        }
    });
});


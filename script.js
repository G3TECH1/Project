document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("nav");
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (!menuBtn) {
        console.error('Element with id "nav" not found.');
        return;
    }
    if (!dropdownMenu) {
        console.error('Element with id "dropdown-menu" not found.');
        return;
    }
    menuBtn.addEventListener("click", function() {
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
        } else {
            dropdownMenu.style.display = "none";
        }
    });
});

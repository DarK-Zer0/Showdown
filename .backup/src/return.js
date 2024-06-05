const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.onscroll = function() {
    console.log("Scroll event is triggered");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when the button is clicked
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
/* Scroll to Top button START */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function scrollToTop() {
    if (window.scrollTo) {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling
        });
    } else { // Old browsers support
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE и Opera
    }
}

/* Scroll to Top button END */
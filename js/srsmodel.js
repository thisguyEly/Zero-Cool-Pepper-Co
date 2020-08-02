// Get Model
var modal = document.getElementById("mySRPModal");

//Button top open modal
var btn = document.getElementById("srpBtn");

// Span element to close modal
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

// Close when user clicks anywhere outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
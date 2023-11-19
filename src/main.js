
// Function to show or hide the drawer
function toggleDrawer() {
    console.log("toggleDrawer() called");
    let drawer = document.getElementById("drawer");
    drawer.classList.toggle("hidden");
}

// Event listener for button click
let button = document.getElementById("button-nav");
button.addEventListener("click", toggleDrawer);

document.addEventListener("DOMContentLoaded", function () {
    // Find the button using its unique ID
    var button = document.getElementById("uniqueButton");

    // Check if the button is found
    if (button) {
        // Trigger a click event on the button
        button.click();
    } else {
        console.error("Button not found with the specified ID");
    }
});

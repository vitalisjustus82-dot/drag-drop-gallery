// Select all five small images
const images = document.querySelectorAll(".gallery-image");

// Select the large image
const displayImage = document.querySelector("#displayImage");

// Select the message
const message = document.querySelector("#message");

// Select the large image box
const largeImageBox = document.querySelector(".large-image-box");


// Add events to all five images
images.forEach(function (image) {

    // Runs when an image starts being dragged
    image.addEventListener("dragstart", function (event) {

        // Get the source of the dragged image
        const imageSrc = image.src;

        // Store the image source in the drag data
        event.dataTransfer.setData("text/plain", imageSrc);

        // Bonus challenge:
        // Change the appearance of the large image box
        largeImageBox.classList.add("dragging");
    });


    // Runs when dragging ends
    image.addEventListener("dragend", function () {

        // Restore the large image box
        largeImageBox.classList.remove("dragging");
    });

});


// Allow an image to be dropped into the large box
largeImageBox.addEventListener("dragover", function (event) {

    // Prevent the browser's default behavior
    event.preventDefault();

});


// Runs when the image is dropped
largeImageBox.addEventListener("drop", function (event) {

    // Prevent default browser behavior
    event.preventDefault();

    // Get the image source from the dragged image
    const imageSrc = event.dataTransfer.getData("text/plain");

    // Display the image
    displayImage.src = imageSrc;

    // Hide the message
    message.style.display = "none";

    // Restore the large image box
    largeImageBox.classList.remove("dragging");
});
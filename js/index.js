    const readMoreButton = document.getElementById("read-more-button");
    const readMoreContent = document.getElementById("read-more-content");
    let isCollapsed = true;

    readMoreButton.addEventListener("click", () => {
        isCollapsed = !isCollapsed;
        if (isCollapsed) {
            readMoreContent.style.maxHeight = "0";
            readMoreContent.style.opacity = "0";
            readMoreButton.textContent = "Read More";
        } else {
            readMoreContent.style.maxHeight = "200px"; // Adjust the maximum height as needed
            readMoreContent.style.opacity = "1";
            readMoreButton.textContent = "Read Less";
        }
    });

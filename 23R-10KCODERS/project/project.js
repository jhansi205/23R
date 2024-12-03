const hangmanImage = document.getElementById("hangman");
        const images = [
            "../assests/Hangman-0.png",
            "../assests/Hangman-1.png",
            "../assests/Hangman-2.png",
            "../assests/Hangman-3.png",
            "../assests/Hangman-4.png",
            "../assests/Hangman-5.png",
            "../assests/Hangman-6.png"
        ];

        let currentIndex = 0;

        hangmanImage.addEventListener("click", () => {
            // Increment the index
            currentIndex++;

            // If the index exceeds the number of images, // Reset to the first image
            if (currentIndex >= images.length) {
                currentIndex=0; // Reset to the first image
               
            }

            // Update the image source
            hangmanImage.setAttribute("src", images[currentIndex]);
        });
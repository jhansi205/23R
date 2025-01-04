const hangmanImages = document.getElementById("hangman");
        const hangman = [
            "../assests/Hangman-0.png",
            "../assests/Hangman-1.png",
            "../assests/Hangman-2.png",
            "../assests/Hangman-3.png",
            "../assests/Hangman-4.png",
            "../assests/Hangman-5.png",
            "../assests/Hangman-6.png"
        ];

        let currentIndex = 0;

        hangmanImages.addEventListener("click", () => {
            // Increment the index
            currentIndex++;

            // If the index exceeds the number of images, // Reset to the first image
            if (currentIndex >= hangman.length) {
                currentIndex=0; // Reset to the first image
               
            }

            // Update the image source
            hangmanImages.setAttribute("src", hangman[currentIndex]);
        });
        let arr=["MONKEY","LION","TIGER"]
       
        const words=document.getElementById("words")
        const buttons=document.querySelectorAll(".btn");
       buttons.forEach((button)=>{
        button.addEventListener("click",()=>{
          let a1=document.createElement("div")
          a1.className="box"
          a1.textContent=button.textContent
          words.append(a1)
          let letterFound = false;
          for(i of arr){
            for(j of i){
             if(a1.textContent===j){
                letterFound=true
                console.log(`Found: ${a1.textContent} in "${i}"`);
                break
             }
                
            }
            if (letterFound) break
          }
        })
       })
       
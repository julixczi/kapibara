const button = document.querySelector("#capybara-button");
const box = document.querySelector("#capybara-box");
let text = document.querySelector("#capybara-text");

text.innerHTML = "Chcesz zobaczyć kapibarę?"

button.addEventListener("click", (e) =>{
    box.classList.toggle("hidden");
        if (box.classList != "hidden"){

        text.innerHTML = "Oto kapibarka"

        document.body.addEventListener("mousewheel", (e) =>{
            document.body.style.backgroundColor = "red";
            console.log(e);
        
            if(e.deltaY > 0) {
                document.body.style.backgroundColor = "red";
            }else {
                document.body.style.backgroundColor = "blue";
            }
        });

    } else {
        text.innerHTML = "Chcesz zobaczyć kapibarę?";

        document.body.style.backgroundColor = "inherit";
    }
  });
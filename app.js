const buttons = document.querySelectorAll(".button");
let display_cont = document.querySelector(".display-result");

let display_value = "";
buttons.forEach((btn) => {
    btn.addEventListener("click" , () => {
        display_value += btn.textContent; 
        display_cont.textContent = display_value;
    })
})

const result = document.querySelector("#equalsto");

result.addEventListener("click" ,  ()=> {
    try {
        display_cont.textContent = eval(display_cont.textContent);
        // display_value = display_cont.textContent;
    }
    catch(error) {
        display_cont.textContent = "ERROR";
    }
})

const clear = document.querySelector(".reset");

clear.addEventListener("click" , () => {
    display_cont.textContent = "";
    display_value = "";
})

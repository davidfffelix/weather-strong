const wrapper = document.querySelector(".wrapper");
inputPart = wrapper.querySelector(".input-part");
infoTxt = inputPart.querySelector(".info-txt");
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup", e => {
    // If user pressed Enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        console.log("Hello")
    }          
})
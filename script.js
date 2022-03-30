const form = document.querySelector("form");
let field = document.querySelector("fieldset");
let msg = document.createElement("label");
field.appendChild(msg);
msg.style.color = "red";

form.addEventListener("submit", e => {
    let pass1 = document.querySelector("#pwd1");
    let pass2 = document.querySelector("#pwd2");

    if (pass1.value !== pass2.value) {
        e.preventDefault();
        pass1.classList.add("error");
        pass2.classList.add("error");
        
        msg.textContent = "The passwords don't match!"
        
    }else{
        pass1.classList.remove("error");
        pass2.classList.remove("error");
        
        msg.textContent = ""
    }

});
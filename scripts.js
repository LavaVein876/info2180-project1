/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector(".newsletter form");
    const email = document.querySelector("#email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const mail = email.value.trim();

        if(mail){
            message.textContent = `Thank you! Your email address ${mail} has been added to our mailing list!`;
            message.style.color = "white";
        }
        else{
            message.textContent = "Please enter a valid email address.";
            message.style.color = "yellow";
        }

        email.value = "";
    });
});
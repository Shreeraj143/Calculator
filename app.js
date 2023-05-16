let string = "";
const buttons = document.querySelectorAll(".button");
const inputDisplay = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        inputDisplay.value = string;
      } else if (e.target.innerHTML == "C") {
        string = "";
        inputDisplay.value = string;
      } else if (e.target.innerHTML == "M+") {
        string = Math.abs(string);
        inputDisplay.value = string;
      } else if (e.target.innerHTML == "M-") {
        string = -string;
        inputDisplay.value = string;
      } else {
        console.log(e.target);
        console.log(e.target.innerHTML);
        string += e.target.innerHTML;
        inputDisplay.value = string;
      }
    } catch (e) {
      string = "ERROR!! PLEASE CHECK SYNTAX";
      inputDisplay.value = string;
      console.log("ERROR!!");
    }
  });
});

// Theme Change
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

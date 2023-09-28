let ans = "";
let buttons = document.querySelectorAll(".button");
let oprators = document.querySelectorAll(".oprator");
let darkMode = document.querySelector(".darkMode");
let input = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      ans = eval(ans);
      document.querySelector("input").value = ans;
    } else if (e.target.innerHTML == "AC") {
      ans = "";
      document.querySelector("input").value = ans;
    } else if (e.target.innerHTML == "del") {
      ans = ans.slice(0, -1);
      document.querySelector("input").value = ans;
    } else {
      ans = ans + e.target.innerHTML;
      console.log(ans);
      document.querySelector("input").value = ans;
    }
  });
});
darkMode.addEventListener("click", function () {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("whiteTheme");
  }
  input.classList.toggle("whiteTheme");
  //   darkMode.classList.toggle("redColor");

  for (i = 0; i < oprators.length; i++) {
    oprators[i].classList.toggle("redColor");
  }
});

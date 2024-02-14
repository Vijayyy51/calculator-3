let ans = "";
let buttons = document.querySelectorAll(".button");
let oprators = document.querySelectorAll(".oprator");
let theme = document.querySelector(".theme");
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

const textareac = document.getElementById("text-area");
const no_char = document.getElementById("total-charecters");
const no_reamin = document.getElementById("remain-charecters");
textareac.addEventListener("keyup", () => {
  textcount();
});
function textcount() {
  no_char.innerText = textareac.value.length;
  no_reamin.innerText =
    textareac.getAttribute("maxLength") - textareac.value.length;
}

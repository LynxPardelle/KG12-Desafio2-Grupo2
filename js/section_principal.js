var section_principal = document.getElementById("div_section_principal");

var xhr = new XMLHttpRequest();
xhr.open("GET", "js/htmls_sources/section_principal.html", true);
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return; // or whatever error handling you want
  section_principal.innerHTML = this.response.split("%¬%")[1];
};
xhr.send();

console.log(section_principal);

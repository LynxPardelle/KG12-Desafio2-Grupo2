var aside_left = document.getElementById("aside_left_innerHTML");

var xhr = new XMLHttpRequest();
xhr.open("GET", "js/htmls_sources/aside-left.html", true);
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return; // or whatever error handling you want
  aside_left.innerHTML = this.response.split("%¬%")[1];
};
xhr.send();

// console.log(aside_left);

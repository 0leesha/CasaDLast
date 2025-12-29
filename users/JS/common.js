fetch("/customer/pages/nav.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);

fetch("/customer/pages/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);
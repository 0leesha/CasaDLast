
fetch("/users/pages/nav.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;
    document.dispatchEvent(new Event('cart:updated'));
  });
fetch("/users/pages/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);
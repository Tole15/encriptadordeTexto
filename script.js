function span(id) {
  var text = document.getElementById(id);
  var spanned = "";
  for (var i = 0; i < text.innerHTML.length; i++) {
    spanned += "<span>" + text.innerHTML[i] + "</span>";
  }
  text.innerHTML = spanned;

  setTimeout(function() {
    window.location.href = "encriptador.html";
  }, 4000);
}

span("text");

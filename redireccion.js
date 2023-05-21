window.addEventListener("DOMContentLoaded", function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "movil.html";
    } else {
      window.location.href = "pc.html";
    }
  });
  
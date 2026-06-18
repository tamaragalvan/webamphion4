document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Navbar: fondo sólido al hacer scroll ---------- */
  var nav = document.querySelector(".site-nav");
  function onScroll() {
    if (window.scrollY > 30) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      toggle.innerHTML = isOpen
        ? '<i class="bi-x-lg"></i>'
        : '<i class="bi-list"></i>';
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        toggle.innerHTML = '<i class="bi-list"></i>';
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ---------- Callouts de la sección tecnología ----------
     En desktop se despliegan con :hover (CSS). En touch,
     se necesita un tap para abrir / cerrar. */
  var callouts = document.querySelectorAll(".callout");
  callouts.forEach(function (callout) {
    callout.addEventListener("click", function (e) {
      var alreadyActive = callout.classList.contains("is-active");
      callouts.forEach(function (c) { c.classList.remove("is-active"); });
      if (!alreadyActive) callout.classList.add("is-active");
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".callout")) {
      callouts.forEach(function (c) { c.classList.remove("is-active"); });
    }
  });
});

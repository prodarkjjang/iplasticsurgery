/* I Plastic Surgery & Reconstructive Surgery Clinic — site behaviour */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  /* ---------------------------------------------- Mobile navigation ---- */
  if (toggle && nav && header) {
    /* The menu panel hangs off the bottom of the header. Publish the header's
       real height so the CSS can cap the panel at the space actually left on
       screen, instead of guessing at a fixed value. */
    var publishHeaderBottom = function () {
      var bottom = Math.round(header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--header-bottom", bottom + "px");
    };

    var isOpen = function () {
      return nav.classList.contains("is-open");
    };

    var setNav = function (open) {
      if (open) publishHeaderBottom();
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setNav(!isOpen());
    });

    /* Follow the menu link, then close */
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });

    /* Tap anywhere else on the page to dismiss */
    document.addEventListener("click", function (e) {
      if (isOpen() && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setNav(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        setNav(false);
        toggle.focus();
      }
    });

    /* The topbar scrolls away above the sticky header, so the header's bottom
       edge moves. Keep the panel's height cap in step while it is open. */
    window.addEventListener("scroll", function () {
      if (isOpen()) publishHeaderBottom();
    }, { passive: true });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setNav(false);
      else if (isOpen()) publishHeaderBottom();
    });

    publishHeaderBottom();
  }

  /* -------------------------------------------- Sticky header shadow ---- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------- Reveal on scroll ---- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealables.forEach(function (el) { observer.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------- Footer year ------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

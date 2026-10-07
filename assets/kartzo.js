(function () {
  var cartEl = document.getElementById("cart-count");
  var cartCount = cartEl ? parseInt(cartEl.textContent, 10) || 0 : 0;

  function setCart(count) {
    if (!cartEl) return;
    cartCount = count;
    cartEl.textContent = String(count);
    var cartLink = cartEl.closest("a");
    if (cartLink) {
      cartLink.setAttribute("aria-label", "Cart, " + count + (count === 1 ? " item" : " items"));
    }
  }

  document.querySelectorAll(".add-cart").forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.getAttribute("data-added") === "1") return;
      button.setAttribute("data-added", "1");
      var original = button.textContent;
      button.textContent = "Added";
      setCart(cartCount + 1);
      window.setTimeout(function () {
        button.setAttribute("data-added", "0");
        button.textContent = original.indexOf("Buy") !== -1 ? original : "Add to Cart";
      }, 1200);
    });
  });

  document.querySelectorAll(".wish").forEach(function (button) {
    button.addEventListener("click", function () {
      var on = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", on ? "false" : "true");
    });
  });

  var menuBtn = document.getElementById("menu-btn");
  var mobileNav = document.getElementById("mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("hidden") === false;
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
      });
    });
  }

  document.querySelectorAll(".qty-minus, .qty-plus").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = btn.closest("[data-qty]");
      if (!wrap) return;
      var valueEl = wrap.querySelector("[data-qty-value]");
      var min = parseInt(wrap.getAttribute("data-min") || "1", 10);
      var max = parseInt(wrap.getAttribute("data-max") || "10", 10);
      var value = parseInt(valueEl.textContent, 10) || 1;
      if (btn.classList.contains("qty-plus")) value = Math.min(max, value + 1);
      else value = Math.max(min, value - 1);
      valueEl.textContent = String(value);
      wrap.dispatchEvent(new CustomEvent("qtychange", { detail: { value: value }, bubbles: true }));
    });
  });

  var newsletter = document.getElementById("newsletter-form");
  if (newsletter) {
    var email = document.getElementById("newsletter-email");
    var message = document.getElementById("newsletter-msg");
    newsletter.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message.textContent = "Enter a valid email address.";
        message.className = "mt-2 text-xs font-semibold text-amber-300";
        email.setAttribute("aria-invalid", "true");
        email.focus();
        return;
      }
      email.setAttribute("aria-invalid", "false");
      message.textContent = "Subscribed. Watch your inbox for deals.";
      message.className = "mt-2 text-xs font-semibold text-white";
      email.value = "";
    });
  }

  window.Kartzo = { setCart: setCart, getCartCount: function () { return cartCount; } };
})();

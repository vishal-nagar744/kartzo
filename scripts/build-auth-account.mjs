import { page, crumbs, icon } from "./shared.mjs";

export function buildAuthAccount() {
  // ---------------------------------------------------------------------------
  // 19. SIGN IN (login.html)
  // ---------------------------------------------------------------------------
  page("login.html", "Sign In — Kartzo", "Sign in to your Kartzo customer account to manage orders, track deliveries, and view your saved wishlist.", "account", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Sign In" }])}

    <div class="pad site-max py-10 sm:py-16 max-w-md mx-auto">
      <div class="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
        <div class="text-center mb-6">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
            ${icon("user", "h-3.5 w-3.5")}
            Customer Account
          </span>
          <h1 class="mt-2 text-2xl font-extrabold text-brand-ink">Welcome Back</h1>
          <p class="mt-1 text-xs text-slate-500">Sign in with your email to access your orders and wishlist.</p>
        </div>

        <form id="login-form" class="space-y-4" novalidate>
          <div>
            <label for="login-email" class="block text-xs font-bold text-slate-600">Email Address</label>
            <input required id="login-email" type="email" placeholder="e.g. rahul@example.com" class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="rahul@example.com">
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="login-password" class="block text-xs font-bold text-slate-600">Password</label>
              <a href="forgot-password.html" class="text-xs font-bold text-brand hover:underline">Forgot?</a>
            </div>
            <div class="relative mt-1.5">
              <input required id="login-password" type="password" placeholder="••••••••" class="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-11 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="password123">
              <button type="button" id="toggle-password" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition" aria-label="Toggle password visibility">
                ${icon("eye", "h-4 w-4")}
              </button>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="remember-me" checked class="accent-brand h-4 w-4">
            <label for="remember-me" class="text-xs font-semibold text-slate-600">Keep me signed in</label>
          </div>

          <button type="submit" class="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-bold text-white shadow-md hover:bg-brand-dark transition active:scale-[0.98]">
            <span>Sign In to Account</span>
            ${icon("arrow-right", "h-4 w-4")}
          </button>
          
          <p id="login-status" class="text-center text-xs font-bold text-emerald-600 hidden">Redirecting to your account...</p>
        </form>

        <div class="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
          New to Kartzo?
          <a href="register.html" class="font-bold text-brand hover:underline ml-1">Create an Account</a>
        </div>
      </div>
    </div>
`, `<script>
  (function () {
    var toggleBtn = document.getElementById("toggle-password");
    var passInput = document.getElementById("login-password");
    if (toggleBtn && passInput) {
      toggleBtn.addEventListener("click", function () {
        var isPass = passInput.type === "password";
        passInput.type = isPass ? "text" : "password";
      });
    }
    var form = document.getElementById("login-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = document.getElementById("login-status");
        if (status) status.classList.remove("hidden");
        setTimeout(function () { window.location.href = "account.html"; }, 600);
      });
    }
  })();
</script>`);

  // ---------------------------------------------------------------------------
  // 20. REGISTER (register.html)
  // ---------------------------------------------------------------------------
  page("register.html", "Create Account — Kartzo", "Register for a free Kartzo customer account for express checkout, parcel tracking, and special benefits.", "account", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Create Account" }])}

    <div class="pad site-max py-10 sm:py-16 max-w-md mx-auto">
      <div class="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
        <div class="text-center mb-6">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
            ${icon("sparkles", "h-3.5 w-3.5")}
            Join Kartzo
          </span>
          <h1 class="mt-2 text-2xl font-extrabold text-brand-ink">Create an Account</h1>
          <p class="mt-1 text-xs text-slate-500">Enjoy seamless checkout, order tracking, and exclusive discounts.</p>
        </div>

        <form id="register-form" class="space-y-4" novalidate>
          <div>
            <label for="reg-name" class="block text-xs font-bold text-slate-600">Full Name</label>
            <input required id="reg-name" type="text" placeholder="e.g. Priya Sharma" class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="Priya Sharma">
          </div>
          <div>
            <label for="reg-email" class="block text-xs font-bold text-slate-600">Email Address</label>
            <input required id="reg-email" type="email" placeholder="e.g. priya@example.com" class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="priya@example.com">
          </div>
          <div>
            <label for="reg-phone" class="block text-xs font-bold text-slate-600">Mobile Phone (For Order SMS)</label>
            <input required id="reg-phone" type="tel" placeholder="+91 98765 43210" class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="+91 98765 43210">
          </div>
          <div>
            <label for="reg-password" class="block text-xs font-bold text-slate-600">Create Password</label>
            <div class="relative mt-1.5">
              <input required id="reg-password" type="password" placeholder="At least 8 characters" class="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-11 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="securepassword123">
              <button type="button" id="toggle-reg-password" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition" aria-label="Toggle password visibility">
                ${icon("eye", "h-4 w-4")}
              </button>
            </div>
          </div>

          <button type="submit" class="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-bold text-white shadow-md hover:bg-brand-dark transition active:scale-[0.98]">
            <span>Create Account</span>
            ${icon("arrow-right", "h-4 w-4")}
          </button>
          
          <p id="reg-status" class="text-center text-xs font-bold text-emerald-600 hidden">Account registered! Redirecting...</p>
        </form>

        <div class="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
          Already have an account?
          <a href="login.html" class="font-bold text-brand hover:underline ml-1">Sign In</a>
        </div>
      </div>
    </div>
`, `<script>
  (function () {
    var toggleBtn = document.getElementById("toggle-reg-password");
    var passInput = document.getElementById("reg-password");
    if (toggleBtn && passInput) {
      toggleBtn.addEventListener("click", function () {
        var isPass = passInput.type === "password";
        passInput.type = isPass ? "text" : "password";
      });
    }
    var form = document.getElementById("register-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = document.getElementById("reg-status");
        if (status) status.classList.remove("hidden");
        setTimeout(function () { window.location.href = "account.html"; }, 600);
      });
    }
  })();
</script>`);

  // ---------------------------------------------------------------------------
  // 21. FORGOT PASSWORD (forgot-password.html)
  // ---------------------------------------------------------------------------
  page("forgot-password.html", "Reset Password — Kartzo", "Reset your Kartzo account password securely with your registered email.", "account", `
    ${crumbs([{ href: "index.html", label: "Home" }, { href: "login.html", label: "Sign In" }, { label: "Reset Password" }])}

    <div class="pad site-max py-10 sm:py-16 max-w-md mx-auto">
      <div class="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
        <div class="text-center mb-6">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
            ${icon("lock", "h-3.5 w-3.5")}
            Security
          </span>
          <h1 class="mt-2 text-2xl font-extrabold text-brand-ink">Reset Password</h1>
          <p class="mt-1 text-xs text-slate-500">Enter your email and we'll send a secure password reset link.</p>
        </div>

        <form id="reset-form" class="space-y-4" novalidate>
          <div>
            <label for="reset-email" class="block text-xs font-bold text-slate-600">Registered Email Address</label>
            <input required id="reset-email" type="email" placeholder="rahul@example.com" class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink outline-none focus:border-brand focus:bg-white transition" value="rahul@example.com">
          </div>

          <button type="submit" class="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-bold text-white shadow-md hover:bg-brand-dark transition active:scale-[0.98]">
            <span>Send Reset Instructions</span>
            ${icon("arrow-right", "h-4 w-4")}
          </button>
          
          <p id="reset-status" class="text-center text-xs font-bold text-emerald-600 hidden">Password reset link has been dispatched to your email!</p>
        </form>

        <div class="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
          Remember your password?
          <a href="login.html" class="font-bold text-brand hover:underline ml-1">Return to Sign In</a>
        </div>
      </div>
    </div>
`, `<script>
  (function () {
    var form = document.getElementById("reset-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = document.getElementById("reset-status");
        if (status) status.classList.remove("hidden");
      });
    }
  })();
</script>`);

  // ---------------------------------------------------------------------------
  // 22. CUSTOMER ACCOUNT PORTAL (account.html)
  // ---------------------------------------------------------------------------
  page("account.html", "My Account — Kartzo", "Manage your Kartzo customer profile, saved delivery addresses, orders, and security settings.", "account", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "My Account" }])}

    <div class="pad site-max py-8">
      <!-- Welcome Header -->
      <div class="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/80 pb-6 gap-4">
        <div class="flex items-center gap-4">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand font-black text-xl">
            RM
          </div>
          <div>
            <h1 class="text-2xl font-extrabold text-brand-ink">Hello, Rahul Mehta</h1>
            <p class="text-xs text-slate-500">rahul.mehta@example.com • Member since Jan 2025</p>
          </div>
        </div>
        <a href="login.html" class="inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
          Sign Out
        </a>
      </div>

      <!-- Customer Account Layout -->
      <div class="grid gap-8 lg:grid-cols-[260px_1fr]">
        
        <!-- Account Sidebar Navigation -->
        <aside class="space-y-1">
          <a href="account.html" class="flex items-center gap-3 rounded-xl bg-brand-soft px-4 py-3 text-xs font-bold text-brand">
            ${icon("user", "h-4 w-4")}
            <span>Overview &amp; Profile</span>
          </a>
          <a href="orders.html" class="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
            ${icon("package", "h-4 w-4 text-slate-400")}
            <span>My Orders (4)</span>
          </a>
          <a href="wishlist.html" class="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
            ${icon("heart", "h-4 w-4 text-slate-400")}
            <span>Saved Wishlist (4)</span>
          </a>
          <a href="tracking.html" class="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
            ${icon("truck", "h-4 w-4 text-slate-400")}
            <span>Track Shipments</span>
          </a>
          <a href="contact.html" class="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
            ${icon("help", "h-4 w-4 text-slate-400")}
            <span>Help &amp; Support</span>
          </a>
        </aside>

        <!-- Main Account Content Area -->
        <div class="space-y-8">
          
          <!-- Recent Order Snapshot -->
          <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 class="text-sm sm:text-base font-extrabold text-brand-ink">Most Recent Order</h2>
                <p class="text-xs text-slate-500">Order #KZ-10482 • Placed 6 Oct 2026</p>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
                <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
                In Transit
              </span>
            </div>
            
            <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div class="flex items-center gap-3.5">
                <span class="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F6F8FB] p-1">
                  <img src="assets/p-headphones.webp" alt="Headphones" class="h-12 w-auto object-contain">
                </span>
                <div>
                  <h3 class="text-xs sm:text-sm font-bold text-brand-ink">Wireless Headphones Pro</h3>
                  <p class="text-xs text-slate-500">Space Black • Bluetooth 5.3</p>
                  <p class="text-xs font-bold text-brand mt-0.5">₹2,799</p>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <a href="tracking.html" class="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-4 text-xs font-bold text-white hover:bg-brand-dark transition">
                  ${icon("truck", "h-3.5 w-3.5")}
                  <span>Track Package</span>
                </a>
                <a href="orders.html" class="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
                  View All Orders
                </a>
              </div>
            </div>
          </div>

          <!-- Saved Addresses Grid -->
          <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 class="text-sm sm:text-base font-extrabold text-brand-ink">Saved Delivery Addresses</h2>
              <button type="button" class="text-xs font-bold text-brand hover:underline">+ Add New</button>
            </div>

            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <div class="rounded-xl border-2 border-brand bg-brand-soft/30 p-4">
                <div class="flex items-center justify-between">
                  <span class="rounded bg-brand px-2 py-0.5 text-[10px] font-black text-white">Default Address</span>
                  <span class="text-xs font-bold text-slate-400">Home</span>
                </div>
                <p class="mt-2 text-xs font-bold text-brand-ink">Rahul Mehta</p>
                <p class="mt-1 text-xs text-slate-500 leading-relaxed">Flat 402, Royal Palms, MG Road, Vijay Nagar<br>Indore, Madhya Pradesh 452010</p>
                <p class="mt-2 text-xs font-bold text-slate-600">+91 98765 43210</p>
              </div>

              <div class="rounded-xl border border-slate-200 p-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-400">Office</span>
                  <button type="button" class="text-xs font-bold text-brand hover:underline">Set Default</button>
                </div>
                <p class="mt-2 text-xs font-bold text-brand-ink">Rahul Mehta</p>
                <p class="mt-1 text-xs text-slate-500 leading-relaxed">Suite 502, Business Center, AB Road<br>Indore, Madhya Pradesh 452001</p>
                <p class="mt-2 text-xs font-bold text-slate-600">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <!-- Profile Details Form -->
          <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 class="text-sm sm:text-base font-extrabold text-brand-ink border-b border-slate-100 pb-4">Personal Details</h2>
            <form class="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-xs font-bold text-slate-600">Full Name</label>
                <input class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink" value="Rahul Mehta">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-600">Email Address</label>
                <input class="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs sm:text-sm font-semibold text-brand-ink" value="rahul.mehta@example.com">
              </div>
              <div class="sm:col-span-2">
                <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-6 text-xs sm:text-sm font-bold text-white hover:bg-brand-dark transition">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
`);
}

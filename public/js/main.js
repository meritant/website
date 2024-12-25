(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
      const mobileLinks = mobileMenu.querySelectorAll("a");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    }
  });
})();

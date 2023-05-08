(() => {
  const mobileMenu = document.querySelector("[data-menu]");
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const body = document.body;
  const menuItems = document.querySelectorAll("[data-menu-item]");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      toggleMenu(e);
    });
  });

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "scroll");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

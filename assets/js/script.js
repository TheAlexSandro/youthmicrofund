/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

const dropdownItems = document.querySelectorAll(".dropdown__item");
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");
  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");
    toggleItem(item);
    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");

  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });
    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

addEventListener("resize", removeStyle);

const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});

const login = document.getElementById("login"),
  loginBtn = document.getElementById("login-btn"),
  loginClose = document.getElementById("login-close");

loginBtn.addEventListener("click", () => {
  login.classList.add("show-login");
});

loginClose.addEventListener("click", () => {
  login.classList.remove("show-login");
});

document.addEventListener("DOMContentLoaded", () => {
  const hiddenText = document.querySelectorAll(".hidden");
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  hiddenText.forEach((text) => {
    observer.observe(text);
  });

  const getCop = document.getElementById("year");
  const date = new Date().getFullYear();

  getCop.innerHTML = date == 2025 ? date : `2025-${date}`;
});

document.addEventListener("submit", () => {
  window.location.href = "/";
  alert("Pesan terkirim!");
});

function toggleText(id, btn) {
  let moreText = document.getElementById(id);

  if (!moreText.style.display || moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.innerHTML = "Baca Lebih Sedikit";
  } else {
    moreText.style.display = "none";
    btn.innerHTML = "Baca Selengkapnya";
  }
}

/* ********** Loader ********** */
((d, w) => {
  const $loader = d.getElementById("loader");
  const $loaderContainer = d.querySelector(".loader-container");

  w.addEventListener("load", (e) => {
    $loader.classList.toggle("loader-hidden");
    $loader.addEventListener("transitionend", (e) => {
      $loaderContainer.removeChild($loaderContainer.firstChild);
    });
  });
})(document, window);

/* ********** Scroll Header ********** */
((d, w) => {
  const $header = d.querySelector(".header");

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.scrollY;

    if (scrollTop > 545) {
      $header.classList.add("is-active");
    } else {
      $header.classList.remove("is-active");
    }
  });
})(document, window);

/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** Year ********** */
((d) => {
  const $year = d.getElementById("year");
  let year = new Date().getFullYear();

  $year.innerHTML = year;
})(document);

// included only in the landing page

// header will stick or float based on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const topOffset = parseInt(getComputedStyle(header).top);
  if (window.scrollY > topOffset) {
    // header.id
    header.classList.add("header-stick");
  } else {
    header.classList.remove("header-stick");
  }
});

// form toggle between import and export
const btnImport = document.querySelector(".btn-import");
const btnExport = document.querySelector(".btn-export");
const contentImport = document.querySelector(".form-content-import");
const contentExport = document.querySelector(".form-content-export");

btnImport.addEventListener("click", () => {
  contentImport.classList.remove("hidden");
  contentExport.classList.add("hidden");
  btnImport.classList.add("active");
  btnExport.classList.remove("active");
});

btnExport.addEventListener("click", () => {
  contentExport.classList.remove("hidden");
  contentImport.classList.add("hidden");
  btnExport.classList.add("active");
  btnImport.classList.remove("active");
});

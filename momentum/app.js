const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

const handleTitleClick = () => {
  h1.classList.toggle("clicked");
};

h1.addEventListener("click", handleTitleClick);

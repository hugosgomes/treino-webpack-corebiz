const Main = {
  createMain: () => {
    const mainElement = document.createElement("main");
    const h1 = document.createElement("h1");
    h1.textContent = "Main";
    mainElement.appendChild(h1);
    document.querySelector("body").appendChild(mainElement);
  },
};

export default Main;

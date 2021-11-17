const Header = {
  createHeader: () => {
    const headerElement = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Header";
    headerElement.appendChild(h1);
    document.querySelector("body").appendChild(headerElement);
  },
};

export default Header;

const Footer = {
  createFooter: () => {
    const footerElement = document.createElement("footer");
    const h1 = document.createElement("h1");
    h1.textContent = "Footer";
    footerElement.appendChild(h1);
    document.querySelector("body").appendChild(footerElement);
  },
};

export default Footer;

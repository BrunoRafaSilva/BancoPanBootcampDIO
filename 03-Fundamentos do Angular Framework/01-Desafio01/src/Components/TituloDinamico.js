class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base do component <H1> Bruno Silva </h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Bruno Silva";

    //estilizar
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color:red;
        }
        `;

    //enviar para a shadow

    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define("titulo-dinamico",TituloDinamico);

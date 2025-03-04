import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

export const ElementName = "about-page";

@customElement(ElementName)
export class AboutPage extends LitElement {
  render() {
    return html`<h1>About Page</h1>`;
  }
}

// if (!customElements.get('about-page')) {
//   customElements.define('about-page', AboutPage);
// }

// export default AboutPage;

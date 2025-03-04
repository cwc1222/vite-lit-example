import { html, LitElement } from "lit";

import { customElement } from "lit/decorators.js";

export const ElementName = "home-page";

@customElement(ElementName)
export class HomePage extends LitElement {
  render() {
    return html`<h1>Home Page</h1>`;
  }
}

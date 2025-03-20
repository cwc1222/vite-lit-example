import { css, html } from "lit";

import { customElement } from "lit/decorators.js";
import { BootstrapStyledElement } from "@components/BootstrapStyledElement";

export const ElementName = "home-page";

@customElement(ElementName)
export class HomePage extends BootstrapStyledElement {
  static styles = [
    ...BootstrapStyledElement.styles,
    css`
      .text-green {
        color: green;
      }
    `,
  ] as CSSStyleSheet[];

  render() {
    return html`
      <div class="card">
        <div class="card-header">Hello Home</div>
        <div class="card-body">
          <div class="text-green">aaaa</div>
          <div class="text-green"><a href="/about">Go to About</a></div>
        </div>
      </div>
    `;
  }
}

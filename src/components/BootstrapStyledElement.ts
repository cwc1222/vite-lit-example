import { LitElement } from "lit";

import { customElement } from "lit/decorators.js";
import style from "../style.scss?inline";

const bootstrapStyleSheet = new CSSStyleSheet();
bootstrapStyleSheet.replaceSync(style);

@customElement("bootstrap-styled-element")
export class BootstrapStyledElement extends LitElement {
  static readonly styles = [bootstrapStyleSheet];
}

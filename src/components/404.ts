import { LitElement, customElement, html } from "lit-element";

@customElement("not-found")
class NotFound extends LitElement {
  render() {
    return html`
      <span>Page not found</span>
    `;
  }
}

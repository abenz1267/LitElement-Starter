import { LitElement, customElement, html } from "lit-element";

@customElement("about-view")
class AboutView extends LitElement {
  render() {
    return html`
      <span>About Content</span>
    `;
  }
}

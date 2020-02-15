import { LitElement, customElement, html, property } from "lit-element";
import { router } from "@src/index";

@customElement("hello-view")
class HelloView extends LitElement {
  @property({ type: Object }) location = router.location;

  render() {
    return html`
      <span>${this.location.params["name"]}</span>
    `;
  }
}

import { LitElement, customElement, html, property, css } from "lit-element";
import { store, State } from "@store/store";
import { connect } from "pwa-helpers";
import { counterIncrease, counterDecrease } from "@src/store/actions/counter";
import { userGetThunk } from "@src/store/actions/user";

@customElement("index-view")
class IndexView extends connect(store)(LitElement) {
  @property({ type: Number }) counter: number;
  @property({ type: String }) name: string;
  @property({ type: Number }) inputVal: number = 0;

  stateChanged(_state: State) {
    this.counter = _state.counter.counter;
    this.name = _state.user.name;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `;
  }

  render() {
    return html`
      <span>Hello World</span>
      <span>${this.counter}</span>
      <input
        type="number"
        @change="${e => {
          this.inputVal = parseInt(e.target.value);
        }}"
      />
      <button @click="${this.increase}">+</button>
      <button @click="${this.decrease}">-</button>
      <button @click="${this.getUser}">Thunk Test</button>
      <span>${this.name}</span>
    `;
  }

  getUser() {
    store.dispatch(userGetThunk());
  }

  increase(e) {
    store.dispatch(counterIncrease(this.counter + this.inputVal));
  }

  decrease(e) {
    store.dispatch(counterDecrease(this.counter - this.inputVal));
  }
}

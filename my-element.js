import { LitElement, html } from 'lit';
import styles from './styles.css' assert { type: 'css' };

class MyElement extends LitElement {
  static styles = [styles];

  render() {
    return html`<h1>Hello world</h1>`
  }
}

customElements.define('my-element', MyElement);
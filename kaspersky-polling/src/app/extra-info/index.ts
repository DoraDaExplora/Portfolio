import { LitElement, property, css } from 'lit-element';

import style from './style.scss';
import { template } from './template';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const EXTRA_INFO_NAME = 'extra-info';

export class ExtraInfo extends LitElement {
  @property({ type: String, attribute: 'background', reflect: true }) background = '';
  @property({ type: Boolean }) _animate = false;

  static styles = [ css(typedStyle) ];

  render() {
    return template(this);
  }

  firstUpdated() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this._animate = true;
      }, 0);
    });
  }
}

customElements.define(EXTRA_INFO_NAME, ExtraInfo);
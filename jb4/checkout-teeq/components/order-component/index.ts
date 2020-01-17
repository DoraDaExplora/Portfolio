import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';

// import '../../../../uxui/carousel-component';
import '../buy-component/index';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'order-component';

export class OrderComponent extends TeeqComponent {

  static styles = [ css(typedStyle) ];

  _render() {
    return template(this);
  }

  get imageClassName() {
    let className = 'images__item';
    if (this.content.images.length === 1) {
      className += ' images__item--single';
    } else if (this.content.images.length === 3) {
      className += ' images__item--triple';
    }
    return className;
  }

  proceedToShop() {
    const size = this.shadowRoot.querySelector('.size input:checked');
    const id = size.id;
    const value = (size as any).value;
    const finalUrl = `${this.content.urlToProduct}#/${id}-${this.content.sizeWord}-${value}`;
    window.open(finalUrl, '_blank');
  }

  handleProceedToOrder() {
    this._emitEvent('ga-redirect-buy');
    requestAnimationFrame(this.proceedToShop.bind(this));
  }

  onExit() {
    this._emitEvent('return-landing');
  }
}

define(TEST_TEEQ_NAME, OrderComponent);
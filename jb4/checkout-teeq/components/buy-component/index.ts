import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'buy-component';

export class NavigationComponent extends TeeqComponent {
  @property({ type: Number }) counter = 0;

  static styles = [ css(typedStyle) ];

  _render() {
    return template(this);
  }


  proceedToSharing() {
    this._emitEvent('open-share-screen');
    this._emitEvent('close-image-tagger');
    this._emitEvent('close-header-teeq');
  }
}

define(TEST_TEEQ_NAME, NavigationComponent);
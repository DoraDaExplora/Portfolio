import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

import style from './style.scss';

import { template } from './template';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'header-component';

export class HeaderComponent extends TeeqComponent {
  @property({ type: Number }) touch = 0;

  static styles = [ css(typedStyle) ];

  _render() {
    return template(this);
  }

  active() {
    let className = '';
    if (this.touch > 0) {
      className += 'icon-white';
    }
    return className;
  }

  showOnboarding () {
    this._emitEvent('ga-activate-teeq');
    if(this.state === SMComponentStateEnum.visible) {
      this._emitEvent('show-onboarding-information');
      this._emitEvent('close-image-teeq');
      this._emitEvent('close-navigation-teeq');
    }
  }
  
  showOrder() {
    this._emitEvent('ga-activate-teeq');
    if(this.state === SMComponentStateEnum.visible) {
      this._emitEvent('show-order-component');
      this._emitEvent('close-header-teeq');
      this._emitEvent('close-image-teeq');
      this._emitEvent('close-navigation-teeq');
    }
  }
}

define(TEST_TEEQ_NAME, HeaderComponent);
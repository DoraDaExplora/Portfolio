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
}

define(TEST_TEEQ_NAME, HeaderComponent);
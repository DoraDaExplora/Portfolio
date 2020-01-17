import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'onboarding-component';

export class OnboardingComponent extends TeeqComponent {

  static styles = [ css(typedStyle) ];

  render() {
    return template(this);
  }

  updated(props: any) {
  }

  _render() {
    return null as any;
  }
}

define(TEST_TEEQ_NAME, OnboardingComponent);
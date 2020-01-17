import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'onboarding-component';

export class OnboardingComponent extends TeeqComponent {
  @property({ type: Number }) counter = 0;
  @property({ type: Number }) countdown = 5;

  static styles = [ css(typedStyle) ];

  render() {
    return template(this);
  }

  updated(props: any) {
    props.forEach((_: any, key: string) => {
      if (key === 'state' && this.state === SMComponentStateEnum.visible) {
        this.startTimerWithChecks();
      }
    });
  }

  callTransition(e?: any) {
    if (e) {
      this._emitEvent('ga-activate-teeq');
    }
    const stopEvent = new CustomEvent('stop-timer');
    if (this.counter === this.content.slides.length - 1) {
      this.shadowRoot.querySelector('timer-component').dispatchEvent(stopEvent);
      this.countdown = 5;
      this._emitEvent('show-image-teeq');
      this._emitEvent('show-navigation-teeq');
      return this._emitEvent('show-header-information');
    }

    this._emitEvent('transition-counter');

    this.shadowRoot.querySelector('timer-component').dispatchEvent(stopEvent);
    this.startTimerWithChecks();
  }

  onTick(e: CustomEvent) {
    this.countdown = e.detail.time;
    if (e.detail.isCompleted) {
      this.callTransition();
      this.startTimerWithChecks();
    }
  }

  startTimerWithChecks() {
    if (this.counter === 0) {
      this.startTimer();
    }
  }

  startTimer() {
    this.countdown = 5;
    const startEvent = new CustomEvent('start-timer');
    this.shadowRoot.querySelector('timer-component').dispatchEvent(startEvent);
  }

  _render() {
    return null as any;
  }
  
  getTextClassName(index: number) {
    let className = 'text';
    if (index !== 0) {
      className += ' text--centered';
    }
    return className;
  }
}

define(TEST_TEEQ_NAME, OnboardingComponent);
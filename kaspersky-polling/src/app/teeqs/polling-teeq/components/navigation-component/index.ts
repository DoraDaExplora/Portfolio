import { css, property } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'navigation-component';

export class NavigationComponent extends TeeqComponent {
  @property({ type: Number }) counter = 0;
  @property({ type: Array }) questions = [] as _Object[];
  @property({ type: Array }) handledAnswersIDs = [] as any[];

  static styles = [ css(typedStyle) ];

  _render() {
    return template(this);
  }

  proceedToPolling() {
    this._emitEvent('show-polling-component');
    this._emitEvent('set-button-state');
    this._activateTeeq();
  }

  nextQuestion() {
    if (!this.canUserProceed) {
      return;
    }

    if (this.counter < this.questions.length - 1) {
      this._emitEvent('increment-counter');
    } else {
      this._emitEvent('display-final-page');
    }
  }

  get canUserProceed(): boolean {
    const wasAnswerGiven = this.handledAnswersIDs[this.counter];
    return ![null, undefined].includes(wasAnswerGiven);
  }
}

define(TEST_TEEQ_NAME, NavigationComponent);
import { css, property, html } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'polling-component';

export class PollingComponent extends TeeqComponent {
  @property({ type: Number }) _counter = 0;
  @property({ type: Number }) counter = 0;
  @property({ type: Array }) questions = [] as _Object[];
  @property({ type: Array }) handledAnswersIDs = [] as _Object[];

  static styles = [ css(typedStyle) ];
  question: any;
  handledAnswer: _Object;

  _render() {
    return template(this);
  }

  handleAnswer(e: any, answer: _Object) {
    if ([undefined, null].includes(this.handledAnswersIDs[this.counter])) {
      this.handledAnswersIDs.push(answer.answerID);
    } else {
      this.handledAnswersIDs[this.counter] = answer.answerID;
    }
    this._emitEvent('set-handled-answers', this.handledAnswersIDs);
  }

  renderAnswer(answer: _Object, index: number, question: any){
    return html`
      <div class="test">
        <hr>
      </div>
      <div class="teeq-answer-container">
        <input type="radio" @change="${(e: any) => this.handleAnswer(e, answer)}" id="${answer.answerText}" name="${question}" value="${answer.answerText}"/>
        <label class="radio" for="${answer.answerText}">${answer.answerText}</label>
      </div>
    `;
  }

  updated() {
    console.log("Polling counter: " + this.counter);
  }
}

define(TEST_TEEQ_NAME, PollingComponent);
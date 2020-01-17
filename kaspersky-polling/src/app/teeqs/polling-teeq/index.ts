import { css, html, property } from 'lit-element';
import { define, ExtraPropsToPass, Teeq, _Object } from 'teeqer-core';


import style from './style.scss';

import './components/header-component';
import './components/polling-component';
import './components/navigation-component';
import './components/onboarding-component';
import './components/final-component';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const INTRO_TEEQ_NAME = 'polling-teeq';

export class PollingTeeq extends Teeq {
  static styles = [ css(typedStyle) ];

  extraComponentsProps: ExtraPropsToPass[] = [];

  firstUpdated() {
    this.setExtraProps();
    super.firstUpdated();
  }

  setExtraProps() {
    this.extraComponentsProps.push({
      componentName: 'polling-component',
	    prop: {
        name: 'counter',
        prefix: '.',
        value: 0
      }
    });
    this.extraComponentsProps.push({
      componentName: 'navigation-component',
	    prop: {
        name: 'counter',
        prefix: '.',
        value: 0
      }
    });
    this.extraComponentsProps.push({
      componentName: 'navigation-component',
	    prop: {
        name: 'questions',
        prefix: '.',
        value: this.content.questions
      }
    });
    this.extraComponentsProps.push({
      componentName: 'polling-component',
	    prop: {
        name: 'set-handled-answers',
        prefix: '@',
        value: this.handleSetAnswers.bind(this)
      }
    });
  }

  handleSetAnswers(e: CustomEvent) {
    (this.shadowRoot.querySelector('final-component') as any).handledAnswersIDs = e.detail.slice(0);
    (this.shadowRoot.querySelector('navigation-component') as any).handledAnswersIDs = e.detail.slice(0);
  }
}

define(INTRO_TEEQ_NAME, PollingTeeq);
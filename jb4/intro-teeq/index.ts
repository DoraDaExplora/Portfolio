import { css, html, property } from 'lit-element';
import { define, ExtraPropsToPass, _Object } from 'teeqer-core';


import style from './style.scss';

import './components/header-component';
import './components/onboarding-component';
import { BaseGATeeq } from '../../base-ga-teeq/BaseGATeeq';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const INTRO_TEEQ_NAME = 'intro-teeq';

export class IntroTeeq extends BaseGATeeq {
  
  static styles = [ css(typedStyle) ];

  extraComponentsProps: ExtraPropsToPass[] = [];

  firstUpdated() {
    this.setExtraProps();
    super.firstUpdated();

    this.addEventListener('update-tag-amount', this.handleTagAmountUpdate.bind(this));
  }

  handleTagAmountUpdate(e: any) {
    (this.shadowRoot.querySelector('header-component') as any).touch = e.detail.amount;
  }

  handleShowImageTeeq() {
    this._emitEvent('show-image-tagger');
  }

  handleCloseImageTeeq() {
    this._emitEvent('close-image-tagger');
  }

  handleShowNavigationTeeq() {
    this._emitEvent('show-navigation-teeq');
  }

  handleCloseNavigationTeeq() {
    this._emitEvent('close-navigation-teeq');
  }

  handleCloseIntroTeeq() {
    this._emitEvent('close-header-teeq');
  }

  handleShowOrderTeeq() {
    this._emitEvent('show-order-component');
  }

  setExtraProps() {
    this.extraComponentsProps.push({
      componentName: 'onboarding-component',
	    prop: {
        name: 'counter',
        prefix: '.',
        value: 0
      }
    },
    {
      componentName: 'onboarding-component',
	    prop: {
        name: 'show-image-teeq',
        prefix: '@',
        value: this.handleShowImageTeeq.bind(this)
      },
    },
    {
      componentName: 'onboarding-component',
	    prop: {
        name: 'show-navigation-teeq',
        prefix: '@',
        value: this.handleShowNavigationTeeq.bind(this)
      },
    },
    {
      componentName: 'header-component',
	    prop: {
        name: 'close-navigation-teeq',
        prefix: '@',
        value: this.handleCloseNavigationTeeq.bind(this)
      },
    },
    {
      componentName: 'header-component',
	    prop: {
        name: 'close-image-teeq',
        prefix: '@',
        value: this.handleCloseImageTeeq.bind(this)
      },
    },
    {
      componentName: 'header-component',
	    prop: {
        name: 'close-header-teeq',
        prefix: '@',
        value: this.handleCloseIntroTeeq.bind(this)
      },
    },
    {
      componentName: 'header-component',
	    prop: {
        name: 'show-order-component',
        prefix: '@',
        value: this.handleShowOrderTeeq.bind(this)
      },
    }
    );
  }
}

define(INTRO_TEEQ_NAME, IntroTeeq);
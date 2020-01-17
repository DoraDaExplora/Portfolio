import { css } from 'lit-element';
import { define, ExtraPropsToPass, _Object } from 'teeqer-core';


import style from './style.scss';

import './components/order-component';
import { BaseGATeeq } from '../../base-ga-teeq/BaseGATeeq';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const CHEKOUT_TEEQ_NAME = 'checkout-teeq';

export class CheckoutTeeq extends BaseGATeeq {
  static styles = [ css(typedStyle) ];

  extraComponentsProps: ExtraPropsToPass[] = [];

  
  firstUpdated() {
    this.setExtraProps();
    super.firstUpdated();
  }

  handleShowLandingTeeq() {
    this._emitEvent('return-landing');
  }

  setExtraProps() {
    this.extraComponentsProps.push({
      componentName: 'order-component',
	    prop: {
        name: 'return-landing',
        prefix: '@',
        value: this.handleShowLandingTeeq.bind(this)
      },
    },
    );
  }
}

define(CHEKOUT_TEEQ_NAME, CheckoutTeeq);
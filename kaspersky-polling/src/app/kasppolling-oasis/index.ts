import { css } from 'lit-element';
import { define, ExtraPropsToPass, _Object, Oasis } from 'teeqer-core';

import style from './style.scss';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const OASIS_NAME = 'kasppolling-oasis';

import '../teeqs/polling-teeq';

import 'teeqer-uxui/elements/teeq-block/teeq-block.component';
import 'teeqer-uxui/elements/material-icon/material-icon.component';
import "teeqer-uxui/elements/material-button/material-button.component";
import 'teeqer-uxui/elements/collapsible-block/collapsible-block.component';
import 'teeqer-uxui/elements/carousel-component/carousel-component.component';
import 'teeqer-uxui/elements/exit-component';
import 'teeqer-uxui/elements/iconed-input';
import 'teeqer-uxui/elements/sticky-component';
import 'teeqer-uxui/elements/timer-component';
// R: Except this one.
import '../uxui/component-container';

import config from '../local_config.json';

export class KasppollingOasis extends Oasis {
  static styles = [ css(typedStyle) ];
  
  extraComponentsProps: ExtraPropsToPass[] = [];
  
  organizationUnitID = 'testunit1';
  modelID = '';

  enableTransitionSaving = false;

  async firstUpdated() {
    this.config = config;
    // super.firstUpdated();
    this.setExtraProps();
    this.startConfigHandling();
  }

  setExtraProps() {
  }
}

define(OASIS_NAME, KasppollingOasis);
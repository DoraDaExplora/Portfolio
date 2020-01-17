import { LitElement, property, css } from 'lit-element';
import { StandaloneLanding } from 'teeqer-core';
import 'teeqer-uxui/elements/collapsible-block/collapsible-block.component';

import style from './style.scss';
import { template } from './template';

import '../kasppolling-oasis';
import '../extra-info';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const STANDALONE_LANDING_NAME = 'standalone-landing';

export class KasperskyLanding extends StandaloneLanding {
  @property({ type: String }) background = 'https://static.teeqer.com/kaspersky-polling/kasp-background.jpg';

  static styles = [ css(typedStyle) ];

  render() {
    return template (this);
  }
}
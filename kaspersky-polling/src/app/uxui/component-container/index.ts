import { css, property } from 'lit-element';
import { define, _Object } from 'teeqer-core';
import { UXUIElement } from 'teeqer-uxui/utils/uxui-element';

import style from './style.scss';
import { template } from './template';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const NAME = 'component-container';

export class ComponentContainer extends UXUIElement {
  @property({ type: String }) state = SMComponentStateEnum.visible;
  @property({ type: String }) oasisName = '';
  @property({ type: String }) oasisSelector = '';
  @property({ type: String }) name = '';
  @property({ type: Boolean }) isClosed = false;

  oasis = null as any;
  container = null as any;

  static styles = [ css(typedStyle) ];

  render() {
    return template(this);
  }

  firstUpdated() {
    this.container = this.shadowRoot.querySelector('.component-container');
    this.setOasis();
    this.eitherSetHeightOrNot();
    // const previousWindowResizeListener = window.onresize;
    // window.addEventListener('resize', () => this.onWindowResize(previousWindowResizeListener));
  }

  updated(props: any) {
    props.forEach((_: any, key: string) => {
      if (key === 'state') {
        this.eitherSetHeightOrNot(_);
      }
    });
  }

  eitherSetHeightOrNot(oldState?: string) {
    if (oldState && oldState === this.state) {
      return;
    }

    switch (this.state) {
      case SMComponentStateEnum.visible:
        return this.fluidRestOfVerticalSpace();

      case SMComponentStateEnum.closed:
        return this.revertHeight();

      default:
        return;
    }
  }

  revertHeight() {
    this.isClosed = true;

    if (this.screenWidth < 414) {
      setTimeout(() => {
        this.container.style.minHeight = '';
      }, 300);
    }
  }

  fluidRestOfVerticalSpace() {
    
    if (this.screenWidth < 414) {
      this.container.style.minHeight = `${window.innerHeight}px`;

      // setTimeout(() => {
      //   const height = this.calculateHeight();
      //   console.log(height, this.scrollHeight);
      //   this.container.style.minHeight = `${height}px`;
      // }, 300);
    }
    


    requestAnimationFrame(() => {
      this.isClosed = false;
    });
  }

  calculateHeight() {
    let takenHeight = 0;
    const teeqs = Array.from(this.oasis.shadowRoot.querySelectorAll('*:not(style)'));
    teeqs.forEach((teeq: any) => {
      const openedComponents = Array.from(teeq.shadowRoot.querySelectorAll('*:not([state="closed"]):not(style):not(collapsible-block)'));

      if (teeq.state === SMComponentStateEnum.closed) {
        return;
      }

      openedComponents.forEach((component: any) => {
        if (component.localName !== this.name) {
          takenHeight += component.scrollHeight;
        }
      });
    });

    // console.log(takenHeight);
    const leftAvailableSpace = window.innerHeight - takenHeight;

    // // if (this.name === 'comment-tag') {
    //   console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    //   console.log('NAME', this.name);
    //   console.log(window.innerHeight, takenHeight);
    //   console.log(`Taken height: ${takenHeight}px;`, `Space left: ${leftAvailableSpace}px`);
    //   console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // // }

    return leftAvailableSpace;
  }

  setOasis() {
    const standaloneLanding = document.querySelector('standalone-landing');

    if (standaloneLanding) {
      this.oasis = standaloneLanding.shadowRoot.querySelector(this.oasisName);
    } else if (this.oasisSelector) {
      this.oasis = document.querySelector(this.oasisSelector);
    } else {
      this.oasis = document.querySelector(this.oasisName);
    }
  }

  get screenWidth() {
    return document.documentElement.clientWidth
    || document.body.clientWidth
    || window.innerWidth;
  }
}

define(NAME, ComponentContainer);
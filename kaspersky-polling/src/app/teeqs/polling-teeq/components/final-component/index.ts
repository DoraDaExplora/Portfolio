import { css, property, html } from 'lit-element';
import { TeeqComponent, define, _Object } from 'teeqer-core';

import style from './style.scss';

import { template } from './template';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

const typedStyle = [style] as unknown as TemplateStringsArray;

export const TEST_TEEQ_NAME = 'final-component';

export class FinalComponent extends TeeqComponent {
  @property({ type: Number }) handledAnswersIDs = [] as string[];
  @property({ type: String }) userRole = '';
  @property({ type: String }) userRoleDescriptionMain = '';
  @property({ type: String }) userRoleDescriptionEnding = '';

  static styles = [ css(typedStyle) ];

  _render() {
    return template(this);
  }

  determineFinalResult() {
    const hash = {} as {[key: string]: number};
    this.handledAnswersIDs.forEach(answerID => {
      const currentHash = hash[answerID];
      if (currentHash) {
        hash[answerID]++;
        return;
      }
      hash[answerID] = 1;
    });
    const max = {answerID: '0', value: 0};
    Object.keys(hash).forEach((answerID: any) => {
      if (hash[answerID] > max.value) {
        max.answerID = answerID;
        max.value = hash[answerID];
      }
    });
    switch(max.answerID) {
      case '0':
        this.userRole = 'Gereksiz Derecede Paylaşımcı';
        this.userRoleDescriptionMain = 'Belki de mutluluğun peşinden koşarken insanlara ruhunuzu açmadan önce biraz durup düşünmeniz gerekiyor.';
        this.userRoleDescriptionEnding = 'Raporumuzu okumaya vaktiniz yoksa bile “Arkadaşlık Uygulamalarında Güvenli Kalmanın Temel Kuralları” yazımıza göz atmanızı öneririz.';
        break;
      
      case '1':
        this.userRole = 'Maceracı';
        this.userRoleDescriptionMain = 'Dikkatli olun! Böyle devam ederseniz siber suç mağduru olabilirsiniz.';
        this.userRoleDescriptionEnding = '';
        break;
      
      case '2':
        this.userRole = 'Pragmatik romantik';
        this.userRoleDescriptionMain = 'Kabul edin, insanlarla iletişim kurmaktan çok çevrenizdekileri gözlemlemekten hoşlanıyorsunuz.';
        this.userRoleDescriptionEnding = 'Henüz büyük bir tehlikeyle karşılaşmamışken, dikkat etmeniz gerekenleri öğrenin!';
        break;

      case '3':
        this.userRole = 'Anonim';
        this.userRoleDescriptionMain = 'Kabul edin, insanlarla iletişim kurmaktansa çevrenizdekileri gözlemlemeyi tercih ediyorsunuz.';
        this.userRoleDescriptionEnding = 'Gerçi iki durumda da kimliğiniz tamamen gizli kalıyor. Takdire şayan!';
        break;

      default:
        this.userRole = 'Gereksiz Derecede Paylaşımcı';
        this.userRoleDescriptionMain = 'Belki de mutluluğun peşinden koşarken insanlara ruhunuzu açmadan önce biraz durup düşünmeniz gerekiyor.';
        this.userRoleDescriptionEnding = 'Raporumuzu okumaya vaktiniz yoksa bile “Arkadaşlık Uygulamalarında Güvenli Kalmanın Temel Kuralları” yazımıza göz atmanızı öneririz.';
        break;
    }
  }

  updated() {
    this.determineFinalResult();
  }

  handleStoreTransition(this: any, elementID: string) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'gtm.click',
      'gtm.element': this,
      'gtm.gtm.elementClasses': '',
      'gtm.elementId': elementID,
      'gtm.elementTarget': '',
      'gtm.elementUrl': '',
      'gtm.uniqueEventId': (window as any).dataLayer.length,
    });
  }


}

define(TEST_TEEQ_NAME, FinalComponent);

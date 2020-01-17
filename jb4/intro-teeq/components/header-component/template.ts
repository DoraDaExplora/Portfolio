import { html } from 'lit-element';
import { HeaderComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
    <section class="navigation-header">
        <img class="logo-company" @click="${self.showOnboarding}" src="${self.content.imageLink}" alt="jb4">
        
        <collapsible-block ?opened="${self.state === SMComponentStateEnum.visible}">
            <div class="information">
                <div class="teeq">
                    <div class="touch ${self.active()}">
                        <img class="icon" src="${self.content.touchApp}">
                        <span class="__touch-counter">${self.touch}</span>
                    </div>

                    <div class="people">
                        <material-icon class="people" icon="people"></material-icon>
                        <span class="__people-counter">0</span>
                    </div>
                </div>
                
                <div class="order icon-active" @click="${self.showOrder}">
                    <material-icon class="shopping_cart" icon="shopping_cart"></material-icon>
                    <span class="__count">1</span>
                </div>
            </div>
        </collapsible-block>
    </section>
`;
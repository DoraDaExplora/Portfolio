import { html } from 'lit-element';
import { OnboardingComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
<component-container .state="${self.state}" .name="${self.localName}" oasisName="jb4-oasis">
    <timer-component @tick="${self.onTick}" duration="${5}"></timer-component>
    <section class="onboarding">
        <img class="image" src="${self.content.introImage}">
        
        <sticky-component position="bottom">
            <collapsible-block ?opened="${self.counter <= self.content.slides.length - 1}">
                <div class="time-out">
                    <div class="inner">
                        <p class="counter">${self.countdown}</p>
                        <material-icon icon="remove"></material-icon>
                        <material-button @click="${self.callTransition}">NEXT</material-button>
                    </div>
                </div>
            </collapsible-block>
        </sticky-component> 
    </section>
</component-container>
`;
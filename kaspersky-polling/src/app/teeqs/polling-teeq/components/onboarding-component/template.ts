import { html } from 'lit-element';
import { OnboardingComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
<component-container .state="${self.state}" .name="${self.localName}" oasisName="kasppolling-oasis">
    <section class="onboarding">
        <div class="text">
            <h1>${self.content.title}</h1>
            <p>${self.content.author}</p>
            <p>${self.content.quizIntroText}</p>
            <p>${self.content.quizIntroTextEnding}</p>
        </div> 
    </section>
</component-container>
`;
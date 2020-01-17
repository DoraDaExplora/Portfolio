import { html } from 'lit-element';
import { NavigationComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
    <section class="navigation-tag">
        <div class="nav-container">
            <div class="nav-container nav-container--inner">
                ${self.state === SMComponentStateEnum.minimized
                    ? html`<material-button @click="${self.proceedToPolling}" class="nav-button nav-button--continue">TESTE BAŞLA</material-button>`
                    : html`<material-button @click="${self.nextQuestion}" ?disabled="${!self.canUserProceed}" class="nav-button nav-button--continue">DEVAM ET</material-button>`
                    }
            </div>
        </div>
    </section>
`;
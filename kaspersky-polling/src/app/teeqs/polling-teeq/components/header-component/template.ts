import { html } from 'lit-element';
import { HeaderComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
    <section class="navigation-header">
        <img class="logo-company" src="${self.content.imageLink}" alt="kaspersky">
    </section>
`;
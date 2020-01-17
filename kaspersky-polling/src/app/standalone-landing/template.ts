import { html } from 'lit-element';
import { KasperskyLanding as Model } from '.';

export const template = (self: Model) => html`
<extra-info .background="${self.background}">
    <kasppolling-oasis></kasppolling-oasis>
</extra-info>
`;
import { html } from 'lit-element';
import { ComponentContainer as Model } from './index';
import { _Object } from 'teeqer-core';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
<collapsible-block ?opened="${!self.isClosed}">
    <section class="component-container">
        <slot></slot>
    </section>
</collapsible-block>
`;
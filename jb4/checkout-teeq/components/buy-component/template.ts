import { html } from 'lit-element';
import { NavigationComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
    <section class="navigation-tag">
        <div class="nav-container">
            <div class="nav-container--inner">
                <material-icon class="shopping_cart icon--active" icon="shopping_cart"></material-icon>
                <material-button class="nav-button--buy">${self.content.buttonText}</material-button>
            </div>
            <material-icon class="more_vert icon--disabled" icon="more_vert"></material-icon>
        </div>
    </section>
`;
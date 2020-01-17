import { html } from 'lit-element';
import { FinalComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
<component-container .state="${self.state}" .name="${self.localName}" oasisName="kasppolling-oasis" class="final-component">
    <section class="onboarding">
        <div class="text">
            <h1>${self.userRole}</h1>
            <p>${self.userRoleDescriptionMain}</p>
            <p>${self.userRoleDescriptionEnding}</p>
        </div>

        <sticky-component position="bottom" @click="${() => self.handleStoreTransition('buy_redirect')}">
            <a href="https://app.appsflyer.com/com.kaspersky.secure.connection?pid=acq&c=happn" data-omniture-sale-button-type="Buy" data-omniture-product-name="Kaspersky VPN Secure Connection" target="_blank">
                <div class="final-footer">
                    <div class="final-footer final-footer__inner">
                        <div class="kaspersky-logo-container">
                            <img class="logo-company" src="${self.content.imageLink}" alt="Kaspersky Secure Connection">
                            <div class="kaspersky-logo-container kaspersky-logo-container--inner">
                                <h4 class="kaspersky-logo-container kaspersky-logo-container--inner heading">Kaspersky</h4>
                                <h3 class="kaspersky-logo-container kaspersky-logo-container--inner heading--product">VPN Secure Connection</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <footer class="action-btn">
                <div class="btn-tupoy">
                <a href="https://app.appsflyer.com/com.kaspersky.secure.connection?pid=acq&c=happn" data-omniture-sale-button-type="Buy" data-omniture-product-name="Kaspersky VPN Secure Connection" target="_blank">
                    <material-button>${self.content.actionBtn}</material-button>
                </a>
                </div>
            </footer>
        </sticky-component>
    </section>
</component-container>
`;
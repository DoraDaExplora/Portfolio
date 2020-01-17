import { html } from 'lit-element';
import { OrderComponent as Model } from './index';

export const template = (self: Model) => html`
<component-container .state="${self.state}" .name="${self.localName}" oasisName="jb4-oasis">
    <section class="order-tag">
        <sticky-component .position="top">
            <exit-component @exit="${self.onExit}"></exit-component>
        </sticky-component>

        <section class="product">
            <img class="logo-company" src="${self.content.imageLink}" alt="jb4">

            <h1>${self.content.caption}</h1>

            <main class="images">
                ${self.content.images.map((image: string) => html`
                    <img class="${self.imageClassName}" src="${image}" alt="">
                `)}
            </main>

            <div class="product-information">
                <section class="rating-container">
                    <p>${self.content.sizeText}</p>
                    <div class="options size">
                        ${self.content.size.map((item: any, index: number) => html`
                            <input ?checked="${index === 0}" value="${item.text}" type="radio" id="${item.id}" name="selector-size">
                            <label for="${item.id}">${item.text}</label>
                        `)}
                    </div>
                </section>
            </div>
        </section>

        <sticky-component position="bottom">
            <buy-component @click="${self.handleProceedToOrder}" .content="${self.content.buyComponent}"></buy-component>
        </sticky-component>
    </section>
</component-container>
`;
import { html } from 'lit-element';
import { PollingComponent as Model } from './index';
import { SMComponentStateEnum } from 'teeqer-core/state-machine/types/SMComponentStateEnum';

export const template = (self: Model) => html`
<component-container .state="${self.state}" .name="${self.localName}" oasisName="kasppolling-oasis" class="polling-component">
    <div class="main-content">
        <div class="polling-header">
            <!-- R: Incorrect modifier classname usage. Use the comments of the navigation-component. -->
            <p class="polling-header polling-header--title">${self.content.title}</p>
            <h3 class="polling-header polling-header--counter">${self.counter + 1}/${self.content.questions.length}</h3>
            <hr>
        </div>
        <div class="polling-content">
            ${self.content.questions.map((question: any, index: number) => html`
                <collapsible-block ?opened="${index === self.counter}">
                    <!-- R: Same here. -->
                    <h3 class="polling-content polling-content--question">${question.questionTitle}</h3>
                    <!-- R: Same here. -->
                    <div class="polling-content polling-content--answers">
                        ${question.answers.map((answer: any, index: number, question: any)  =>
                            self.renderAnswer(answer, index, question)
                        )}
                        
                    </div>
                </collapsible-block>
            `)}
        </div>
    </div> 
</component-container>
`;
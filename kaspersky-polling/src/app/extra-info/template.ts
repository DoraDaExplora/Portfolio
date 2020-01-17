import { html } from 'lit-element';
import { ExtraInfo as Model } from '.';

export const template = (self: Model) => html`
	<section class="extra-info">
		<aside
			class="
				extra-info__intro-area 
				extra-info__intro-area--placeholder
				${self._animate ? 'fade' : ''}
			"
			style="background-image: url(${self.background})"
		>
		</aside>
		<main class="extra-info__action-area">
			<slot></slot>
		</main>
	</section>
`;
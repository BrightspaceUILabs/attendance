import { html, LitElement } from 'lit-element/lit-element.js';

class D2lAttendanceLateIcon extends LitElement {
	render() {
		return html`
		<style>
			svg {
				vertical-align: middle;
			}
		</style>
		<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
			<title>late</title>
			<desc>Created with Sketch.</desc>
			<g id="late" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="Group-2-Copy-13" transform="translate(3.000000, 0.000000)">
					<g id="check-circle-copy-2" transform="translate(0.000000, 3.000000)" fill="currentColor" fill-rule="nonzero">
						<g id="Group">
							<path d="M12,1.6 C17.7344,1.6 22.4,6.2656 22.4,12 C22.4,17.7344 17.7344,22.4 12,22.4 C6.2656,22.4 1.6,17.7344 1.6,12 C1.6,6.2656 6.2656,1.6 12,1.6 L12,1.6 Z M12,0 C5.3728,0 0,5.3728 0,12 C0,18.6272 5.3728,24 12,24 C18.6272,24 24,18.6272 24,12 C24,5.3728 18.6272,0 12,0 Z"
							 id="Shape"></path>
						</g>
					</g>
					<rect id="Rectangle-Copy" fill="currentColor" x="8" y="0" width="8" height="2" rx="1"></rect>
					<path d="M12,2.5 L12,1" id="Line-2-Copy" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="square"></path>
					<rect id="Rectangle-Copy-2" stroke="currentColor" fill="currentColor" transform="translate(23.000000, 5.000000) rotate(45.000000) translate(-23.000000, -5.000000) "
					 x="20.5" y="4.5" width="5" height="1" rx="0.5"></rect>
					<polyline id="Line-Copy" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" points="12 20.5255521 12 14.9850652 17.5 9.5"></polyline>
				</g>
			</g>
		</svg>
		`;
	}

}

window.customElements.define('d2l-attendance-late-icon', D2lAttendanceLateIcon);

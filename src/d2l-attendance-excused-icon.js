import { html, LitElement } from 'lit-element/lit-element.js';

class D2lAttendanceExcusedIcon extends LitElement {
	render() {
		return html`
		<style>
			svg {
				vertical-align: middle;
			}
		</style>
		<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
			<title>excused</title>
			<desc>Created with Sketch.</desc>
			<g id="excused" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="Group-4-Copy-13" transform="translate(3.000000, 3.000000)">
					<g id="check-circle-copy-5" fill="currentColor" fill-rule="nonzero">
						<g id="Group">
							<path d="M12,1.6 C17.7344,1.6 22.4,6.2656 22.4,12 C22.4,17.7344 17.7344,22.4 12,22.4 C6.2656,22.4 1.6,17.7344 1.6,12 C1.6,6.2656 6.2656,1.6 12,1.6 L12,1.6 Z M12,0 C5.3728,0 0,5.3728 0,12 C0,18.6272 5.3728,24 12,24 C18.6272,24 24,18.6272 24,12 C24,5.3728 18.6272,0 12,0 Z"
							 id="Shape"></path>
						</g>
					</g>
					<path d="M4,20 L20,4" id="Line-Copy-3" stroke="currentColor" stroke-width="2"></path>
				</g>
			</g>
		</svg>
		`;
	}

}

window.customElements.define('d2l-attendance-excused-icon', D2lAttendanceExcusedIcon);

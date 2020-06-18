import { html, LitElement } from 'lit-element/lit-element.js';

class D2lAttendanceAbsentIcon extends LitElement {
	render() {
		return html`
		<style>
			svg {
				vertical-align: middle;
			}
		</style>
		<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
			<title>absent</title>
			<desc>Created with Sketch.</desc>
			<g id="absent" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
				<g id="Group-4-Copy-13" transform="translate(7.000000, 7.000000)" stroke="currentColor" stroke-width="2">
					<path d="M0,16 L16,0" id="Line-Copy-3"></path>
					<path d="M0,16 L16,0" id="Line-Copy-3" transform="translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000) "></path>
				</g>
			</g>
		</svg>
		`;
	}
}

window.customElements.define('d2l-attendance-absent-icon', D2lAttendanceAbsentIcon);

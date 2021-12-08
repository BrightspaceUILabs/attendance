import '@brightspace-ui/core/components/button/button.js';
import '@brightspace-ui/core/components/button/button-subtle.js';
import '@brightspace-ui/core/components/inputs/input-date.js';
import '@brightspace-ui/core/components/inputs/input-search.js';
import './src/attendance-table.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

class Attendance extends LocalizeMixin(LitElement) {

	static get properties() {
		return {
			prop1: { type: String },
		};
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}
			:host([hidden]) {
				display: none;
			}
			.grid {
				display: grid;
				grid-template-rows: 1fr 1fr 1fr min-content;
				grid-gap: 5px;
			}
			.side-items {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			d2l-icon {
				color: var(--d2l-color-blue);
			}

			d2l-input-search {
				margin-left: 20px;
			}

			.date-picker-container {
				width: 100%;
				display: grid;
				grid-template-rows: 1fr 1fr 1fr;
			}

			d2l-date-picker {
				justify-self: center;
			}

			hr {
				width: 100%;
			}
		`;
	}

	static async getLocalizeResources(langs) {
		const langResources = {
			'en': { 'myLangTerm': 'I am a localized string!' }
		};

		for (let i = 0; i < langs.length; i++) {
			if (langResources[langs[i]]) {
				return {
					language: langs[i],
					resources: langResources[langs[i]]
				};
			}
		}

		return null;
	}

	constructor() {
		super();

		this.prop1 = 'attendance';
	}

	render() {
		return html`
			<div class="grid">
				<div class="side-items">
					<h2>Attendance</h2>
					<d2l-button-subtle
						icon="d2l-tier1:reports"
						text="Statistics"
					>
					</d2l-button-subtle>
				</div>
				<div class="date-picker-container">
					<hr style="align-self: end;">
					<d2l-input-date>
					</d2l-input-date>
					<hr style="align-self: start;">
				</div>
				<div class="side-items">
					<d2l-button id="bulk-update">Mark All Present</d2l-button>
					<div class="side-items">
						<d2l-input-search></d2l-input-search>
					</div>
				</div>
				<d2l-attendance-table
					class-list="[[classListString]]"
					date="[[date]]"
					token="[[token]]"
				></d2l-attendance-table>
			</div>
			`;
	}
}
customElements.define('d2l-labs-attendance', Attendance);

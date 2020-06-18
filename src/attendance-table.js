import '@brightspace-ui/core/components/button/button-subtle';
import './d2l-attendance-absent-icon';
import './d2l-attendance-excused-icon';
import './d2l-attendance-late-icon';
import './d2l-attendance-present-icon';

import { css, html, LitElement } from 'lit-element/lit-element.js';

class AttendanceTable extends LitElement {
	static get properties() {
		return {
			students: { type: String },
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
				grid-template-rows: 1fr 1fr min-content;
				grid-gap: 5px;
			}
			.side-items {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			d2l-input-search {
				margin-left: 20px;
			}

			d2l-attendance-present-icon:focus-within {
				color: white;
			}
			d2l-button-subtle > * {
				color: var(--d2l-color-gypsum);
			}
			d2l-button-subtle:hover > * {
				color: var(--d2l-color-ferrite);
			}
			d2l-button-subtle.green > * {
				color: var(--d2l-color-regolith);
			}
			d2l-button-subtle.green {
				background: var(--d2l-color-olivine);
				border-radius: var(--d2l-button-shared_-_border-radius);
			}
			d2l-button-subtle.grey > * {
				color: var(--d2l-color-regolith);
			}
			d2l-button-subtle.grey {
				background: var(--d2l-color-galena);
				border-radius: var(--d2l-button-shared_-_border-radius);
			}
			d2l-button-subtle.red > * {
				color: var(--d2l-color-regolith);
			}
			d2l-button-subtle.red {
				background: var(--d2l-color-cinnabar);
				border-radius: var(--d2l-button-shared_-_border-radius);
			}
		`;
	}
	constructor() {
		super();
		fetch('../demo/data/students.json').then(
			r => r.json()
		).then(data => this.students = data);
	}
	_getColor() {

	}

	renderStudentRow(studentData) {
		return html`<tr>
		<td>${studentData.Name} ${studentData.UserId}</td>
		<td>
			<d2l-button-subtle
				user="${studentData.UserId}"
				status="1"
				buttonStatus="P"
				class="d2l-button-icon ${this._getColor(studentData.Status, 'P')}"
			>
				<d2l-attendance-present-icon></d2l-attendance-present-icon>
			</d2l-button-subtle>
		</td>
		<td>
			<d2l-button-subtle
				user="${studentData.UserId}"
				status="3"
				buttonStatus="L"
				class="d2l-button-icon ${this._getColor(studentData.Status, 'L')}"
			>
				<d2l-attendance-late-icon></d2l-attendance-late-icon>
			</d2l-button-subtle>
		</td>
		<td>
			<d2l-button-subtle
				user="[[studentData.UserId]]"
				status="4"
				buttonStatus="E"
				class="d2l-button-icon ${this._getColor(studentData.Status, 'E')}"
			>
				<d2l-attendance-excused-icon></d2l-attendance-excused-icon>
			</d2l-button-subtle>
		</td>
		<td>
			<d2l-button-subtle
				user="[[studentData.UserId]]"
				status="2"
				buttonStatus="A"
				class="d2l-button-icon ${this._getColor(studentData.Status, 'A')}"
			>
				<d2l-attendance-absent-icon></d2l-attendance-absent-icon>
			</d2l-button-subtle>
		</td>
		<td>
			<d2l-input-text width="100px">
			></d2l-input-text>
		</td>
	</tr>`;

	}

	render() {
		return html`
			<table-wrapper sticky-headers> </table-wrapper>
			<table>
				<thead>
					<tr>
						<th>
							<table-col-sort-button desc
								>Name</table-col-sort-button
							>
						</th>
						<th>Present</th>
						<th>Late</th>
						<th>Excused</th>
						<th>Absent</th>
						<th colspan="2">Note</th>
					</tr>
				</thead>
				<tbody>
					${this.students && this.students.map(studentData => this.renderStudentRow(studentData))}
				</tbody>
			</table>
		`;
	}
}
customElements.define('d2l-attendance-table', AttendanceTable);

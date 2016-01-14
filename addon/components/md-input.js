import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-input';

const {
	computed,
	isBlank
} = Ember;

export default MaterializeInputField.extend({
	layout,
	type: 'text',

	didInsertElement() {
		this._super(...arguments);
		// make sure the label moves when a value is bound.
		this._setupLabel();
	},

	intValue: computed('value', {

		set(key, value) {
			if (value !== this.get('intValue')) {
				this.set('value', value);
			}
			return value;
		},

		get() {
			var value = this.get('value');
			var intValue = parseFloat(value);
			if (isBlank(value)) {
				return null;
			} else {
				return isNaN(intValue) ? NaN : intValue;
			}
		}

	}),

	floatValue: computed('value', {

		set(key, value) {
			if (value !== this.get('floatValue')) {
				this.set('value', value);
			}
			return value;
		},

		get() {
			var value = this.get('value');
			var floatValue = parseFloat(value);
			if (isBlank(value)) {
				return null;
			} else {
				return isNaN(floatValue) ? NaN : floatValue;
			}
		}

	}),

	arrayValue: computed('value', {

		set(key, value = []) {
			var currentValue = this.get('value') || '';
			if (value === null) {
				return value;
			}
			if (value.join(',') === currentValue) {
				return value;
			} else {
				this.set('value', value.map((str) => {
					return str.trim();
				}).join(','));
				return value;
			}
		},

		get() {
			return this.get('value') ? this.get('value').split(',').map((str) => {
				return str.trim();
			}) : [];
		}

	})
});
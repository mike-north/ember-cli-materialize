import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-switch';
import afterRender from  '../utils/after-render';

const {
	computed,
	run: {
		later
	},
	on
} = Ember;

export default SelectableItem.extend({
	layout,

	classNames: ['switch', 'materialize-switch'],

	offLabel: 'Off',
	onLabel: 'On',
	disabled: false,

	_labelClass: computed('name', function() {
		return this.get('name') ? 'right' : '';
	}),
	onChange: null,
	bindChangeEvent: afterRender(function() {
		if (!this.getAttr('onChange')) {
			return;
		}

		later(this, function() {
			if (this.get('_state') === 'inDOM') {
				let el = this.$('.ember-checkbox');
				if (el) {
					el.on(`change.${this.get('elementId')}`, function() {
						if (this.getAttr('onChange')) {
							later(this, function() {
								this.attrs.onChange(this.$('.ember-checkbox').is(':checked'));
							}, 100);
						}
					}.bind(this));
				}
			}
		}, 500);
	}),
	unbindChangeEvent: on('wiilDestroyElement', function() {
		this.$('.ember-checkbox').off(`change.${this.get('elementId')}`);
	})
});
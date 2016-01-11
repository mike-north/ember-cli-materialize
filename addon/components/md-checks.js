import SelectableItemGroup from './selectable-item-group';
const {
	run: {
		later,
		scheduleOnce
	},
	on
} = Ember;

export default SelectableItemGroup.extend({
	selectableItemView: 'md-checks-check',
	multiple: true,

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
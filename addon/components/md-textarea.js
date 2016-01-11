import InputField from './md-input-field';
import layout from '../templates/components/md-textarea';
import afterRender from '../utils/after-render';

export default InputField.extend({
	layout,

	didInsertElement() {
		this._super(...arguments);
		// make sure the label moves when a value is bound.
		this._setupLabel();
	},

	applyPlaceholder: afterRender(function() {
		this.$('textarea').attr('placeholder', this.get('placeholder'));
	})
});
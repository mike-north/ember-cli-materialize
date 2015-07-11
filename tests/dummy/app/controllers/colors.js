import Ember from 'ember';
import AnchorControllerSupport from 'ember-anchor/mixins/controller-support';

export default Ember.Controller.extend(AnchorControllerSupport, {
	colorBases: Ember.A(['pink', 'red', 'deep-orange', 'orange', 'amber', 'yellow', 'light-green', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'purple', 'deep-purple']),
	boringColorBases: Ember.A(['brown', 'grey', 'blue-grey']),
	colorVariants: Ember.A(['lighten-5', 'lighten-4', 'lighten-3', 'lighten-2', 'lighten-1', '', 'darken-1', 'darken-2', 'darken-3', 'darken-4']),
	accentColorVariants: Ember.A(['accent-1', 'accent-2', 'accent-3', 'accent-4']),

	colors: Ember.computed('colorBases.[]', 'colorVariants.[]', function () {
		return Ember.A(this.get('colorBases').map(colorBase => {
			let variants = this.get('colorVariants');
			if (['brown', 'grey', 'blue-grey'].indexOf(colorBase) < 0) {
				variants = variants.concat(this.get('accentColorVariants'));
			}
			return {
				base: colorBase,
				variants: Ember.A(variants)
			};
		}));
	}),

	boringColors: Ember.computed('boringColorBases.[]', 'colorVariants.[]', function () {
		return Ember.A(this.get('boringColorBases').map(colorBase => {
			let variants = this.get('colorVariants');
			if (['brown', 'grey', 'blue-grey'].indexOf(colorBase) < 0) {
				variants = variants.concat(this.get('accentColorVariants'));
			}
			return {
				base: colorBase,
				variants: Ember.A(variants)
			};
		}));
	})
});
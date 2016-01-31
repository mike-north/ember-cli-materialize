import Ember from 'ember';
const {
	run: {
		scheduleOnce
	},
	on
} = Ember;

export default function afterRender(func) {
	return on('didInsertElement', function () {
		scheduleOnce('afterRender', this, () => {
			if (this.get('_state') === 'inDOM') {
				if (typeof func === 'string') {
					this[func].call(this);
				} else {
					func.call(this);
				}
			}
		});
	});
}

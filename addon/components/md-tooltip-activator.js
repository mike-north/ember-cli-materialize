import Ember from 'ember';
import $ from 'jquery';
const Em = Ember;

const {
	on,
	Component,
	run: {
		bind,
		scheduleOnce
	}
} = Ember;

export default Component.extend({
	timer: null,
	interval: 500,
	isActive: true,
	cachedElements: null,

	setCachedElements: on('init', function() {
		this.set('cachedElements', Em.A([]));
	}),

	initTootipAfterRender: on('didInsertElement', function(){
		this.initTooltips();
	}),

	initTooltips: function() {
		scheduleOnce('afterRender', this, function() {
			let cachedElements = this.get('cachedElements');
			if (this.get('isActive') && this.get('_state') === 'inDOM') {
				this.clearTooltipsOfDetachedElements();
				this.$('[data-tooltip]').toArray().forEach(function(el) {
					let $el = $(el),
						tooltip = $el.attr('data-tooltip'),
						tooltipId = $el.attr('data-tooltip-id');
					if (tooltip && !tooltipId) {
						$el.tooltip();
						cachedElements.pushObject($el);
					}
				}, this);
				if (!this.get('timer')) {
					this.set('timer', setInterval(bind(this, this.initTooltips), this.get('interval')));
				}
			}
		});
	},

	clearTooltipsOfDetachedElements: function() {
		let cachedElements = this.get('cachedElements'),
			zombies = cachedElements.filter(function(el) {
				return !$.contains(document, el[0]);
			});

		zombies.forEach(function(el) {
			el.tooltip('remove');
			cachedElements.removeObject(el);
			el.remove();
		});
	},

	destroyTooltips: on('willDestroyElement', function() {
		this._super();
		this.clearTooltipsOfDetachedElements();
		this.set('isActive', false);
		clearInterval(this.get('timer'));
		this.set('timer', null);
		this.$('[data-tooltip]').tooltip('destroy');
	})

});
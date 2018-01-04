import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
  classNames: ['input-field'],

  bindAttributes: ['disabled', 'readonly', 'autofocus'],
  validate: false,
  _wasTouched: false,
  isValid: computed('_wasTouched', 'value', 'validate', 'errors', 'errors.[]', function() {
    return (
      (isPresent(this.get('value')) || this.get('_wasTouched')) &&
      this.get('validate') &&
      this.get('errors') &&
      this.get('errors.length') === 0
    );
  }),

  isInvalid: computed('_wasTouched', 'value', 'validate', 'errors', 'errors.[]', function() {
    return (
      (isPresent(this.get('value')) || this.get('_wasTouched')) &&
      this.get('validate') &&
      this.get('errors') &&
      this.get('errors.length') > 0
    );
  }),

  didInsertElement() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (isPresent(this.get('icon'))) {
      this.$('> span').css('padding-left', '3rem');
    }
  },

  id: computed('elementId', function() {
    return `${this.get('elementId')}-input`;
  }),

  _setupLabel() {
    const $label = this.$('> label');
    if (isPresent(this.get('value')) && !$label.hasClass('active')) {
      $label.addClass('active');
    }
  },
  _errorString: computed('errors.[]', function() {
    return (this.get('errors') || []).join('. ');
  }),
  actions: {
    inputFocusIn(evt) {
      this.set('_wasTouched', true);
      this.sendAction('focusIn', evt);
    }
  }
});

import Ember from 'ember';
import afterRender from '../utils/after-render'
const { 
  Component,
  computed,
  isPresent,
  run: {
    later
  },
  on
} = Ember;

export default Component.extend({
  classNames: ['input-field'],

  bindAttributes: ['disabled', 'readonly', 'autofocus'],
  validate: false,

  isValid: computed('validate', 'errors', 'errorMessage', function() {
    return (!this.get('validate') && !isPresent(this.get('errors.firstObject')) && !isPresent(this.get('errorMessage')));
  }),

  isInvalid: computed('validate', 'errors', 'errorMessage', function() {
    return (!this.get('validate') && (isPresent(this.get('errors.firstObject')) || isPresent(this.get('errorMessage'))));
  }),

  visited: false,

  focusOut(){
    this.set('visited', true);
    if (this.attrs.onFocusOut){
      this.attrs.onFocusOut();
    }
  },

  pressedKeys: '13',

  bindChangeEvent: afterRender(function() {
    if (!this.getAttr('onKeypress')) {
      return;
    }

    later(this, function() {
      if (this.get('_state') === 'inDOM') {
        let el = this.$('input');
        if (el) {
          el.on(`keypress.${this.get('elementId')}`, (e) => {
            if ((this.get('pressedKeys') || '').split(',').indexOf(e.which.toString()) !== -1 && this.attrs.onKeypress) {
              later(this, () => {
                this.attrs.onKeypress();
              }, 100);
              
            }
          });
        }
      }
    }, 500);
  }),
  
  unbindChangeEvent: on('wiilDestroyElement', function() {
    this.$('input').off(`keypress.${this.get('elementId')}`);
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
  }

});

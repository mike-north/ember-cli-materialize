import Ember from 'ember';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-select';
import afterRender from '../utils/after-render';
const {
  on,
  run: {
    later,
    scheduleOnce
  }
} = Ember;

export default MaterializeInputField.extend({
  layout,
  classNames: ['md-select'],
  optionLabelPath: 'content',
  optionValuePath: 'content',

  didInsertElement() {
    this._super(...arguments);
    this._setupSelect();
  },

  _setupSelect() {
    // jscs: disable
    this.$('select').material_select();
    // jscs: enable
  },

  // TODO: clean up any listeners that $.select() puts in place
  // _teardownSelect() {
  //
  // }

  // TODO: this could be converted to a computed property, returning a string
  //  that is bound to the class attribute of the inputSelector
  errorsDidChange: Ember.observer('errors', function() {
    const inputSelector = this.$('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    if (!Ember.isNone(inputSelector)) {
      later(this, function() {
        const isValid = this.$('select').hasClass('valid');
        if (isValid) {
          inputSelector.removeClass('invalid');
          inputSelector.addClass('valid');
        } else {
          inputSelector.removeClass('valid');
          inputSelector.addClass('invalid');
        }
      }, 150);
    }
  }),

  onSelect: null,
  bindSelectEvent: afterRender(function() {
    if (!this.getAttr('onSelect')) {
      return;
    }

    later(this, function() {
      if (this.get('_state') === 'inDOM') {
        let el = this.$();
        if (el) {
          el.on(`change.${this.get('elementId')}`, function() {
            if (this.getAttr('onSelect')) {
              later(this, function() {
                this.attrs.onSelect(this.$('select').val());
              }, 100);
            }
          }.bind(this));
        } 
      }

    }, 500);
  }),
  unbindSelectEvent: on('wiilDestroyElement', function(){
     this.$().off(`change.${this.get('elementId')}`);
  }),

  didUpdateAttrs(attrs){
    
    if (attrs.newAttrs.disabled !== attrs.oldAttrs.disabled){
      scheduleOnce('afterRender', this, () => {
        this.$('select').material_select();
      });
    }
  },
});

import Input from './md-input';
import layout from '../templates/components/md-input-date';

export default Input.extend({
  type: 'date',
  classNames: ['input-field'],
  layout,
  actions: {
    inputClicked() {
      this.$('.picker').addClass('picker--opened')
        .addClass('picker--focused');
    }
  }
});

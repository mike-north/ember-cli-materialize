import Ember from 'ember';
import layout from '../templates/components/md-textarea';
import TextComponent from '../mixins/text-component';

const { computed, Component } = Ember;

export default Component.extend(TextComponent, {
  classNames: ['md-textarea', 'input-field'],
  layout,
  _classesForTextarea: computed('_classesForInput', function() {
    return (this.get('_classesForInput') + ' materialize-textarea').trim();
  })
});

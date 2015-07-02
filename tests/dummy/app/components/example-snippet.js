import Ember from 'ember';
import computed from 'ember-new-computed';

const {computed: { empty, alias }} = Ember;

export default Ember.Component.extend({
  emptySnippet: empty('snippet'),
  exampleFrameClass: 'col s12',
  partialName: computed('snippet', {
    get() {
      return `snippets/${this.get('snippet') || 'none'}`;
    }
  }),
  snippetName: computed('snippet', {
    get() {
      return `${this.get('snippet') || 'none'}.hbs`;
    }
  }),
  send() {
    this.get('targetObject').send(...arguments);
  }
});

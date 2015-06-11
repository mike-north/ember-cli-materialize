import Ember from 'ember';
import computed from 'ember-new-computed';

const {computed: { empty }} = Ember;

export default Ember.Component.extend({
  emptySnippet: empty('snippet'),
  partialName: computed('snippet', {
    get() {
      return `snippets/${this.get('snippet') || 'none'}`;
    }
  }),
  snippetName: computed('snippet', {
    get() {
      return `${this.get('snippet') || 'none'}.hbs`;
    }
  })
});

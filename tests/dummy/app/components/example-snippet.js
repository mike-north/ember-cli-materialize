import Component from '@ember/component';
import { empty } from '@ember/object/computed';
import computed from 'ember-new-computed';

export default Component.extend({
  emptySnippet: empty('snippet'),
  exampleFrameClass: 'col s12 position-relative',
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
    let target = this.get('targetObject');
    target.send(...arguments);
  }
});

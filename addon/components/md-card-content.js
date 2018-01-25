import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/md-card-content';
import { deprecate } from '@ember/application/deprecations';

export default Component.extend({
  layout,

  classNames: ['card-content'],

  classNameBindings: ['class'],

  title: computed('parentView.title', function() {
    deprecate('Using md-card-content without passing it a "title" property (relying on parentView.title) is deprecated.',
      true, {
      id: 'ember-cli-materialize.deprecate-parentView',
      until: '1.0.0'
    });
    return this.get('parentView.title');
  }),

  titleClass: computed('parentView.titleClass', function() {
    deprecate('Using md-card-content without passing it a "titleClass" property (relying on parentView.titleClass) is deprecated.',
      true, {
      id: 'ember-cli-materialize.deprecate-parentView',
      until: '1.0.0'
    });
    return this.get('parentView.titleClass');
  }),

  activator: computed('parentView.activator', function() {
    deprecate('Using md-card-content without passing it an "activator" property (relying on parentView.activator) is deprecated.',
      true, {
      id: 'ember-cli-materialize.deprecate-parentView',
      until: '1.0.0'
    });
    return this.get('parentView.activator');
  }),

  cardTitleClass: computed('titleClass', function() {
    return this.get('titleClass') || 'black-text';
  })
});

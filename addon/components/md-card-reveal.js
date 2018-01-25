import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/md-card-reveal';
import { deprecate } from '@ember/application/deprecations';

export default Component.extend({
  layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBindings: ['class'],
  title: computed('parentView.title', function() {
    deprecate('Using md-card-reveal without passing it a "title" property (relying on parentView.title) is deprecated.',
      true, {
      id: 'ember-cli-materialize.deprecate-parentView',
      until: '1.0.0'
    });
    return this.get('parentView.title');
  }),
  activator: computed('parentView.activator', function() {
    deprecate('Using md-card-reveal without passing it an "activator" property (relying on parentView.activator) is deprecated.',
      true, {
      id: 'ember-cli-materialize.deprecate-parentView',
      until: '1.0.0'
    });
    return this.get('parentView.activator');
  })
});

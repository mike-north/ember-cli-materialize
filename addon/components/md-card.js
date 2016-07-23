import Ember from 'ember';
import layout from '../templates/components/md-card';

const { computed, computed: { empty }, Component } = Ember;

export default Component.extend({
  classNames: ['md-card', 'card'],
  title: null,
  image: null,
  _hasReveal: false,
  _extraTitleClasses: computed('_hasReveal', function() {
    return this.get('_hasReveal') ? 'activator' : '';
  }),
  _isTitleInContent: empty('image'),
  layout
});

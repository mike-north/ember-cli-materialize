import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.LinkView.reopen({
    attributeBindings: ['data-activates']
  });
}

export default {
  name: 'link-view',
  initialize: initialize
};

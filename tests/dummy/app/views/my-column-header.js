import layout from '../templates/snippets/my-column-header';

// BEGIN-SNIPPET my-column-header
import Ember from 'ember';
import DefaultHeaderView from 'ember-cli-materialize/views/default-column-header';

export default DefaultHeaderView.extend({
  layout
});
// END-SNIPPET

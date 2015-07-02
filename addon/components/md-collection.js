import Ember from 'ember';
import DefaultCollectionHeaderView from 'ember-cli-materialize/views/default-collection-header';
import layout from '../templates/components/md-collection';

const { computed: { bool } } = Ember;

export default Ember.Component.extend({
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerView: DefaultCollectionHeaderView,
  header: null,
  layout: layout,
  _hasHeader: bool('header')
});

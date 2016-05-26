import Ember from 'ember';
import DefaultCollectionHeaderView from 'ember-cli-materialize/views/default-collection-header';
import layout from '../templates/components/md-collection';

const { Component, computed: { bool } } = Ember;

export default Component.extend({
  layout,
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerView: DefaultCollectionHeaderView,
  header: null,
  _hasHeader: bool('header')
});

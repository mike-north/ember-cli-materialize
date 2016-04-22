import Ember from 'ember';
import layout from '../templates/components/md-collection';

const { Component, computed: { bool } } = Ember;

export default Component.extend({
  layout,
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerComponentName: 'md-default-collection-header',
  header: null,
  _hasHeader: bool('header')
});

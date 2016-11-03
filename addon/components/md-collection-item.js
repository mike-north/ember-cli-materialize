import Ember from 'ember';
import layout from '../templates/components/md-collection-item';
import CollectionItem from '../mixins/collection-item';
import ClickAction from '../mixins/click-action';


const { Component } = Ember;

export default Component.extend(CollectionItem, ClickAction, {
  layout
});

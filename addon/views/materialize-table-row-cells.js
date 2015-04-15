/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';

var get = Ember.get;

export default Ember.CollectionView.extend({
  tagName: 'tr',
  content: null, //column
  model: null, //row
  classNames: ['materialize-table-row'],

  createChildView (viewClass, attrs) {
    viewClass = attrs.content.cellView;
    attrs.column = attrs.content;
    attrs.controller = this.table.get('targetObject');

    attrs.context = Ember.ObjectProxy.create({
        content: this.model,
        column: attrs.column,
        value: null
    });

    var unwrapped = this.unwrapStream(attrs.content.valuePath);
    if (unwrapped) {
      attrs.context.set('value', get(this.model, unwrapped));
    }

    attrs.context = Ember.$.extend(attrs.context, this.unwrapStream(get(attrs.content, 'properties')));
    return this._super(viewClass, attrs);
  },

  unwrapStream (bindPath) {
    if(bindPath && get(bindPath, 'isStream') && bindPath.isStream) {
      return bindPath.value();
    }
    return bindPath;
  }
});

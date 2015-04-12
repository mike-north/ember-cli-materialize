import Ember from 'ember';

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
        column: attrs.column
    });

    attrs.context = Ember.$.extend(attrs.context, this.unwrapStream(Ember.get(attrs.content, 'properties')));
    return this._super(viewClass, attrs);
  },

  unwrapStream (bindPath) {
    if(bindPath && Ember.get(bindPath, 'isStream') && bindPath.isStream) {
      return bindPath.value();
    }
    return bindPath;
  }
});

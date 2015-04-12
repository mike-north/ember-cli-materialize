import Ember from 'ember';
import ColumnComponent from '../components/materialize-table-column';

export default function (params, hash, options, env) {
  var parentView = env.data.view;
  var props = {
    template: options.template
  };

  for (var prop in hash) {
    if (hash.hasOwnProperty(prop)) {
      props[prop] = hash[prop];
      delete hash[prop];
    }
  }

  hash.props = props;
  hash._context = Ember.get(parentView, 'context');
  hash._morph = options.morph;
  parentView.appendChild(ColumnComponent, hash);
}

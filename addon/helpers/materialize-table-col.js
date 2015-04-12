import Ember from 'ember';
import ColumnComponent from '../components/materialize-table-column';

/**
 * This helper maps the context of this helper into the table's cell views.
 * Huge thanks goes to @thoov, @jasonmit and @stefanpenner who have figured
 * this out at Yahoo for our internal table component
 */

export default function(params, hash, options, env) {
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

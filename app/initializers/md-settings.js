import config from '../config/environment';
import MaterializeSettings from 'ember-cli-materialize/services/md-settings';

export function initialize() {
  const { materializeDefaults } = config;
  const application = arguments[1] || arguments[0];

  application.register('config:materialize', materializeDefaults, { instantiate: false });
  application.register('service:materialize-settings', MaterializeSettings);
  application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
}

export default {
  name: 'md-settings',
  initialize: initialize
};

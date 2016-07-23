import Ember from 'ember';
import defaultConfig from 'ember-cli-materialize/config/default';
import config from '../config/environment';

const { getWithDefault } = Ember;
const assign = Ember.assign || Ember.mixin;

function setupEmberMaterialize(application, config) {
  const { materialize } = config
  application.register('config:md-config', materialize, { instantiate: false });
  application.inject('service:md-config', 'materializeDefaults', 'config:md-config');
}

function setupEmberFlash(application, config, configWithDefaults) {
  const fm = Ember.getWithDefault(config, 'flashMessageDefaults',
    Ember.get(configWithDefaults, 'flashMessageDefaults'));
  const c = application.resolveRegistration('config:flash-messages');
  if (c) {
    const newConfig = assign(c, fm);
    for (let k in fm) {
      c[k] = fm[k]
    }
  }
}

export function initialize(application) {
  const cfg = assign(defaultConfig, config);
  setupEmberFlash(application, config, cfg);
  setupEmberMaterialize(application, cfg);
  // application.inj/ect('route', 'foo', 'service:foo');
}

export default {
  name: 'md-setup',
  after: 'flash-messages',
  initialize
};

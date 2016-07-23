import Ember from 'ember';

const { computed: { alias }, Service } = Ember;

export default Service.extend({
  options: alias('materializeDefaults')
});

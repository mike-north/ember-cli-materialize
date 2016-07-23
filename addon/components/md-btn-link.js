import Ember from 'ember';
import layout from '../templates/components/md-btn';
import Button from '../mixins/md-button';

const { computed, LinkComponent } = Ember;

export default LinkComponent.extend(Button, {
  classNames: ['md-btn-link'],
  label: computed.alias('linkTitle'),
  layout,
  href: ''
});

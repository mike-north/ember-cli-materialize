/*global window: true*/
import Ember from 'ember';

const { inject, computed, Component } = Ember;
function actionProxy(name) {
  return function() {
    return this.sendAction(name, ...arguments);
  };
}
export default Component.extend({
  classNames: ['x-example'],
  horizSplit: 6,
  exampleScope: 'snippets/',
  exampleExtension: 'hbs',
  nameOfTemplate: computed('exampleExtension', 'name', function() {
    return `${this.get('name')}.${this.get('exampleExtension')}`;
  }),
  nameOfPartial: computed('exampleScope', 'name', function() {
    return `${this.get('exampleScope')}${this.get('name')}`;
  }),
  exampleName: computed('title', 'name', function() {
    return this.get('title') || this.get('name');
  }),
  _horizClassOption1: computed('horizSplit', function() {
    const s = this.get('horizSplit');
    if (s < 0) {
      return '';
    }
    else {
      return `m${s}`;
    }
  }),
  _horizClassOption2: computed('horizSplit', function() {
    const s = this.get('horizSplit');
    if (s < 0) {
      return '';
    }
    else {
      return `m${12-s}`;
    }
  }),
  flashMessages: inject.service(),
  actions: {
    notify(arg) {
      this.get('flashMessages').add({
        message: arg
      });
    },
    wasClicked(arg) {
      window.alert(arg);
    },
    successToast: actionProxy('successToast'),
    pageChanged() {
      this.sendAction('pageChanged', ...arguments);
    }
  }
});

import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  basicTabsContent: new A([
    { id: 'a', title: 'First' },
    { id: 'b', title: 'Second' },
    { id: 'c', title: 'Third' }
  ]),
  alternateTabsContent: new A([
    { key: 'a', label: 'First' },
    { key: 'b', label: 'Second' },
    { key: 'c', label: 'Third' }
  ]),
  basicTabsSelection: 'a',
  secondTabsSelection: 'g',
  actions: {
    addTab() {
      this.get('basicTabsContent').addObject({ id: 'd', title: 'Fourth' });
    }
  }
});

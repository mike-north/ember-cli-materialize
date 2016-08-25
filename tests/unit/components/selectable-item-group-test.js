import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('selectable-item-group', 'Unit | Component | selectable item group', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it uses the expected optionValuePath and optionLabelPath', function(assert) {
  let collection;
  let component = this.subject();

  assert.expect(7);

  // unset every one of them
  collection = [1, 2, 3];

  component.set('content', collection);

  assert.ok(
    component.get('_content').every(
      (elem, i) => {
        return elem.value === collection[i] &&
          elem.label === collection[i];
      }
    )
  );

  collection = [
    {
      id: 1,
      name: 'Jack Shepard'
    },
    {
      id: 2,
      name: 'Hugo Reyes'
    },
    {
      id: 3,
      name: 'John Locke'
    }
  ];

  component.set('optionLabelPath', 'content.name');
  component.set('content', collection);

  component.get('_content').forEach(
    (option, i) => {
      assert.equal(option.label, collection[i].name);
      assert.deepEqual(option.value, collection[i]);
    }
  );
});

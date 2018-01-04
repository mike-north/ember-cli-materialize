import { A } from '@ember/array';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import AnchorControllerSupport from 'ember-anchor/mixins/controller-support';

export default Controller.extend(AnchorControllerSupport, {
  //eslint-disable-next-line
  colorBases: new A([
    'pink',
    'red',
    'deep-orange',
    'orange',
    'amber',
    'yellow',
    'light-green',
    'green',
    'teal',
    'cyan',
    'light-blue',
    'blue',
    'indigo',
    'purple',
    'deep-purple'
  ]),
  //eslint-disable-next-line
  boringColorBases: new A(['brown', 'grey', 'blue-grey']),
  //eslint-disable-next-line
  colorVariants: new A([
    'lighten-5',
    'lighten-4',
    'lighten-3',
    'lighten-2',
    'lighten-1',
    '',
    'darken-1',
    'darken-2',
    'darken-3',
    'darken-4'
  ]),
  //eslint-disable-next-line
  accentColorVariants: new A(['accent-1', 'accent-2', 'accent-3', 'accent-4']),

  colors: computed('colorBases.[]', 'colorVariants.[]', function() {
    return new A(
      this.get('colorBases').map(colorBase => {
        let variants = this.get('colorVariants');
        if (['brown', 'grey', 'blue-grey'].indexOf(colorBase) < 0) {
          variants = variants.concat(this.get('accentColorVariants'));
        }
        return {
          base: colorBase,
          variants: new A(variants)
        };
      })
    );
  }),

  boringColors: computed('boringColorBases.[]', 'colorVariants.[]', function() {
    return new A(
      this.get('boringColorBases').map(colorBase => {
        let variants = this.get('colorVariants');
        if (['brown', 'grey', 'blue-grey'].indexOf(colorBase) < 0) {
          variants = variants.concat(this.get('accentColorVariants'));
        }
        return {
          base: colorBase,
          variants: new A(variants)
        };
      })
    );
  })
});

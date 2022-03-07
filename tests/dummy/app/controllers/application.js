import { A } from '@ember/array';
import Controller from '@ember/controller';

export default Controller.extend({
  // eslint-disable-next-line
  demoSections: A([
    { name: 'Badges', route: 'badges' },
    { name: 'Buttons', route: 'buttons' },
    { name: 'Cards', route: 'cards' },
    { name: 'Collapsible', route: 'collapsible' },
    { name: 'Collection', route: 'collection' },
    { name: 'Colors', route: 'colors', new: true },
    { name: 'Copyright', route: 'copyright' },
    { name: 'Forms', route: 'forms' },
    { name: 'Loader', route: 'loader' },
    { name: 'Modal', route: 'modal' },
    { name: 'Navbar', route: 'navbar' },
    { name: 'Pagination', route: 'pagination' },
    { name: 'Parallax', route: 'parallax' },
    { name: 'Tables', route: 'tables' },
    { name: 'Tabs', route: 'tabs' }
  ])
});

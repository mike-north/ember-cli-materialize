import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { A } from '@ember/array';

export function isOldIcon(str) {
  return (
    str.split(' ').filter(c => {
      return c.indexOf('mdi-') === 0;
    }).length > 0
  );
}

export function bwCompatIcon(params, hash) {
  let [iconStr] = params;
  let extraClassesString = (hash || {}).extraClasses || null;
  let extraClasses = extraClassesString ? extraClassesString.split(' ') : [];
  if (isOldIcon(iconStr)) {
    return htmlSafe(
      `<i class='${A([iconStr].concat(extraClasses))
        .compact()
        .join(' ')}'></i>`
    );
  } else {
    let classes = iconStr.split(' ');
    let icon = classes.shift();
    let classString = A(['material-icons'].concat(classes).concat(extraClasses))
      .compact()
      .join(' ');
    return htmlSafe(`<i class='${classString}'>${icon}</i>`);
  }
}

export default Helper.helper(bwCompatIcon);

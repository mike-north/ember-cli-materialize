import Ember from 'ember';

const { Helper, String: { htmlSafe } } = Ember;

export function isOldIcon(str) {
  return str.split(' ').filter((c) => {
    return c.indexOf('mdi-') === 0;
  }).length > 0;
}

export function bwCompatIcon(params, { extraClasses='' }) {
  let [iconStr] = params;
  if (isOldIcon(iconStr)) {
    return htmlSafe(`<i class='${[iconStr].concat(extraClasses.split(' ')).join(' ')}'></i>`);
  } else {
    let classes = iconStr.split(' ');
    let icon = classes.shift();
    let classString = ((['material-icons'].concat(classes)).concat(extraClasses.split(' ')))
      .map((x) => x.trim()).join(' ');
    return htmlSafe(`<i class='${classString}'>${icon}</i>`);
  }
  return params;
}

export default Helper.helper(bwCompatIcon);

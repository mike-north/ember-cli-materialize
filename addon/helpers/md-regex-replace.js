import Ember from 'ember';

export function mdRegexReplace(params, hash = {}) {
  const [string, ,replacePattern] = params;
  const regex = params[1].replace(/^(\/)(.*)+(\/)$/, '$2');
  const { flags } = hash;
  const regexPattern = new RegExp(regex, flags);

  return string.replace(regexPattern, replacePattern);
}

export default Ember.Helper.helper(mdRegexReplace);

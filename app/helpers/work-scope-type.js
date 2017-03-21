import Ember from 'ember';

const fineartScopeTypes = [
  'Poster Design',
  'Charcoal Drawing',
  'Pencil Drawing'
];

const photographyScopeTypes = [
  'Photography'
];

const websiteScopeTypes = [
  'Website'
];

export function workScopeType([type]/*, hash*/) {
  if (fineartScopeTypes.includes(type)) {
    return 'Fine Art';
  }
  else if (photographyScopeTypes.includes(type)) {
    return 'Photography';
  }

  return 'Website';
}

export default Ember.Helper.helper(workScopeType);

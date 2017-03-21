import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  category: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});

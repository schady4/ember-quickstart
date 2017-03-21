import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCategory(param) {
      if (param !== '') {
        return this.get('store').query('work', { category: param });
      } else {
        return this.get('store').findAll('work');
      }
    }
  }
});

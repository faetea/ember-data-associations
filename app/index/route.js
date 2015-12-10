import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      pokemon: this.store.findAll('pokemon'),
      items: this.store.findAll('item'),
      generations: this.store.findAll('generation')
    };
  }
});

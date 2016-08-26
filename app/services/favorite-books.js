import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  add(book) {
    this.get('favorites').pushObject(book);
    console.log(this.favorites);
  }
});

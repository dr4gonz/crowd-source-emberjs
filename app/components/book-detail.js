import Ember from 'ember';

export default Ember.Component.extend({
  favoriteBooks: Ember.inject.service(),
  actions: {
    addToFavorite(book) {
      this.get('favoriteBooks').add(book);
      
    }
  }
});

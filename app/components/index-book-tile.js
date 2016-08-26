import Ember from 'ember';

export default Ember.Component.extend({
  bookTitleAuthor: Ember.computed('book.title', 'book.author', function(){
    return this.get('book.title') + ' By: ' + this.get('book.author');
  })
});

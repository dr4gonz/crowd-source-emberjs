import Ember from 'ember';

export default Ember.Service.extend({
  books: [],

  add(book) {
    if(!this.get('books').contains(book)) {
      this.get('books').pushObject(book);
    } else {
      alert("This book has already been added to favorites!");
    }
    // console.log(JSON.parse(JSON.stringify(this.books)));
  }
});

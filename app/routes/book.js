import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.book_id);
  },
  getRating(book) {
    var totalReviews = 0;
    book.get('reviews').toArray().forEach((review) => {
      totalReviews += parseInt(review.get('rating'));
    });
    console.log(totalReviews);
    return (totalReviews/book.get('reviews').toArray().length);
  },
  bookRating: Ember.inject.service(),
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var book = params.book;
      book.get('reviews').addObject(newReview);

      book.set('rating', this.getRating(book));
      console.log(book.get('reviews').toArray().length);
      newReview.save().then(function() {
        return book.save();
      });
      this.get('bookRating').add(newReview);
      this.transitionTo('book');
    },
  },

});

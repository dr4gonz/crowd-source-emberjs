import Ember from 'ember';

export default Ember.Service.extend({
  reviews: [],
  aggregateReview: 0,
  add(review) {
    // console.log(JSON.parse(JSON.stringify(review)));
    this.set('aggregateReview', this.get('aggregateReview') + parseInt(review.get('rating')));
    this.get('reviews').pushObject(review);
    // console.log(this.reviews);
    // console.log(this.aggregateReview);
  }
});

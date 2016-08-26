import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        rating: this.get('rating'),
        date: moment().format('h:mm a, M/D/YYYY'),
        book: this.get('book'),
        body: this.get('body')
      };
      this.set('author', null);
      this.set('title', null);
      this.set('rating', null);
      this.set('body', null);

      this.set('addNewReview', false);

      this.sendAction('saveReview', params);
    }
  }
});

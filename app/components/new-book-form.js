import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    createBook() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date_pub: moment(this.get('date_pub')).format('M/D/YYYY'),
        image: this.get('image')
      };
      this.sendAction('createBook', params);
    },
  }
});

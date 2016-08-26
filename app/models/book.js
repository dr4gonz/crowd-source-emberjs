import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date_pub: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});

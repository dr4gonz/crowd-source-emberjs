import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  rating: DS.attr(),
  book: DS.belongsTo('book', {async:true})
});

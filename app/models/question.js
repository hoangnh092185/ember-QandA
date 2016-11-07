import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  answer: DS.hasMany('answer', {async: true}),
});

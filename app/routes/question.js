import Ember from 'ember';

export default Ember.Route.extend({
  name: DS.attr(),
  tile: DS.attr(),
  content: DS.attr()
});

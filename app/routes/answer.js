import Ember from 'ember';

export default Ember.Route.extend({
  name: DS.attr(),
  content: DS.attr()
});

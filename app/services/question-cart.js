import Ember from 'ember';

export default Ember.Service.extend({
    questions: [],
    add(question) {
      this.get('questions').pushObject(question);
    },
    remove(item) {
      this.get('questions').removeObject(item);
    },
    empty() {
      this.get('questions').setObjects([]);
    }
  });

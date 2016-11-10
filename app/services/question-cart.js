import Ember from 'ember';

export default Ember.Service.extend({
    questions: [],

    add(question) {
      if(this.get('questions').includes(question)){
        alert('Question already added to the list');
      } else {
        this.get('questions').pushObject(question);
      }
    },
    remove(question) {
      this.get('questions').removeObject(question);
    },
    empty() {
      this.get('questions').setObjects([]);
    },
    inclide(question){
      return this.get('questions').includes(question);
    },
  });

import Ember from 'ember';

export default Ember.Service.extend({
    questions: [],
    resetButton: false,
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
      this.set('resetButton', true);
      this.get('questions').setObjects([]);
    },
    includes(question){
      return this.get('monsters').includes(question);
    },
  });

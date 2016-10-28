import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});

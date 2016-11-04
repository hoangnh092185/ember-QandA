import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('question.answer', 'sortBy'),
  
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

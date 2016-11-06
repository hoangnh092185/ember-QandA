import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date'],
  sortedReviews: Ember.computed.sort('question.answer', 'sortBy'),

  actions: {
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    increaseRating(answer, params){
      this.sendAction('increaseRating', answer, params);
    },
    sortFilter(params){
      this.set('sortBy', [params]);
    }
  }
});

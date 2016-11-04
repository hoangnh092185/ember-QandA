import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.name', 'answer.rating', function(){
    return this.get('answer.name') + ' - ' + this.get('answer.rating')
  }),
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(){
      var voteCount = parseInt(this.get('answer.rating')) + 1;  
      this.sendAction('increaseRating', voteCount)
    }
  }
});

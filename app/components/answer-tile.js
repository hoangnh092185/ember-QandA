import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.name', 'answer.rating', function(){
    return ': By ' + this.get('answer.name');
  }),
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer){
      var params = {
      rating: parseInt(this.get('answer.rating')) + 1};
      this.sendAction('increaseRating', answer, params);
    }
  }
});

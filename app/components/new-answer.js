import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    },
    delete(answer){
      if (confirm('Are you sure you want to delete this answer?')){
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});

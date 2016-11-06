import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      var params = {
        name: this.get('name'),
        rating: 0,
        content: this.get('content'),
        question: this.get('question'),
        date: Date(),
      };
      this.set('name', '');
      this.set('content', '');
      this.sendAction('saveAnswer', params);
    },
  }
});

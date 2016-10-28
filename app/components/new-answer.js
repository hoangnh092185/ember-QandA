import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      debugger;
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    },
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  questionCart: Ember.inject.service(),
  updateFormShow: false,
  actions: {
    updateFormShow(){
      this.set('updateFormShow', true);
    },
    saveUpdate(question){
        var params = {
          name: this.get('name'),
          title: this.get('title'),
          content: this.get('content')
        };
        this.set('updateFormShow', false);
        this.sendAction('saveUpdate', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
        this.get('questionCart').remove(question);
      }
    }

  }
});

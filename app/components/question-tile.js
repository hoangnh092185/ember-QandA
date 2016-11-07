import Ember from 'ember';

export default Ember.Component.extend({
  model(questionIndex){
    // return this.store.findRecord('question', params.question_id);
    return this.store.findAll('question');
  },
  // questionIndex: this.store.findAll('question'),

  questionCart: Ember.inject.service(),

  canAddToList: Ember.computed('questionCart.questions.[]', function(){
       return this.get('questionCart').includes(questionIndex);
     }),

  actions: {
    addToList(question){
      this.get('questionCart').add(question);
    }
  }
});

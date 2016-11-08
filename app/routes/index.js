import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion3(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    // questionCart: Ember.inject.service(),
    // canAddToList: Ember.computed('questionCart.questions.[]', function(){
    //     var questionIndex = this.store.find('question');
    //     console.log(questionIndex);
    //     return this.get('questionCart').includes(questionIndex);
    //    }),
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  // model(){
  //   return Ember.RSVP.hash({
  //     questions: this.store.findAll('question'),
  //     answers: this.store.findAll('answer')
  //   });
  // },
  // model(questionIndex){
    // return this.store.findRecord('question', params.question_id);
  //   return this.store.findAll('question');
  // },
  // questionIndex: this.store.findAll('question'),

  questionCart: Ember.inject.service(),
  canAddToList: Ember.computed('questionCart.questions.[]', function(){
      var questionIndex = this.store.findALl('question');
      console.log(questionIndex);
      return this.get('questionCart').includes(questionIndex);
     }),

  actions: {
    addToList(question){
      this.get('questionCart').add(question);
    }
  }
});

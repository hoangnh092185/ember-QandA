import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions:{
    saveAnswer(params){
      var question = params.question;
      var newAnswer = this.store.createRecord('answer', params);
      question.get('answer').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
    },
    destroyAnswer(answer){
      debugger;
      answer.destroyRecord();
    }
  }
});

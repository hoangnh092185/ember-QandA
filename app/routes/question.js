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
      answer.destroyRecord();
    },
    destroyQuestion(question){
      var answer_deletions = question.get('answer').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});

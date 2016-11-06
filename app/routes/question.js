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
    increaseRating(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    destroyQuestion(question){
      var answer_deletions = question.get('answer').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveUpdate(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key, params[key]);
        }
      });
      question.save();
    }
  }
});

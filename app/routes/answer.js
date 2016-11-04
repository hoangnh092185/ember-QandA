import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    increaseRating(answers, voteCount){
      console.log(voteCount);
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key, voteCount[key]);
        }
      });
      answer.save();
    }
  }
});

import Ember from 'ember';

export function answerPopularity(params) {
  var question = params[0];
  console.log(question.get('answer').get('length'));
  if (question.get('answer').get('length') >= 5){
    return Ember.String.htmlSafe('<h2><span class="glyphicon glyphicon-star"></span></h2>');
  }
  return ;
}
export default Ember.Helper.helper(answerPopularity);

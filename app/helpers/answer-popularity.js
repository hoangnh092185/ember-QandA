import Ember from 'ember';

export function answerPopularity(params) {
  var question = params[0];
  console.log(question.get('answer').get('length'))
  if (question.get('answer').get('length') >= 2){
    return Ember.String.htmlSafe('<span class="glyphico glyphicon-fire"></span>');
  }
  return params;
}
export default Ember.Helper.helper(answerPopularity);

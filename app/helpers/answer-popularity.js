import Ember from 'ember';

export function answerPopularity(params) {
  var answer = params[0];

  if (answer.get('rating').get('length') >= 5){
    return Ember.String.htmlSafe('<span class="glyphico glyphicon-fire"></span>')
  }
  return params;
}
export default Ember.Helper.helper(answerPopularity);

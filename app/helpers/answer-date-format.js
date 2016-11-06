import Ember from 'ember';

export function answerDateFormat(params) {
  debugger;
  var formatDate = params[0].get('date');
  console.log(date);
  return date;
}

export default Ember.Helper.helper(answerDateFormat);

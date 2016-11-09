import Ember from 'ember';
import moment from 'moment';

export function answerFormatDate(params) {
    var newDate = moment(params[0]).format('LLL');
    console.log(newDate);
  return newDate;
}

export default Ember.Helper.helper(answerFormatDate);

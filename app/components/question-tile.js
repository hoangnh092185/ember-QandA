import Ember from 'ember';

export default Ember.Component.extend({
  // canAddToList: false,

  questionCart: Ember.inject.service(),
  canAddToList: Ember.computed('questionCart.questions.[]',function(){
      var emptyArray = this.get('questionCart.questions.[]');
      console.log(emptyArray.length);
      if(emptyArray.length === 0){
        return false;
      }
     }),
  actions: {
    addToList(question){
      this.set('canAddToList', true);
      this.get('questionCart').add(question);
    }
  }
});

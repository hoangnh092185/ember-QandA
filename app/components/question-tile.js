import Ember from 'ember';

export default Ember.Component.extend({


  questionCart: Ember.inject.service(),
  // 
  // canAddTolist: Ember.computed('questionCart.questions', function(){
  //
  //   return this.get('questionCart.questions').includes(this);
  // }),

  actions: {
    addToList(question){
        this.get('questionCart').add(question);
    }
  }
});

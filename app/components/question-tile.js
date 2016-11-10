import Ember from 'ember';

export default Ember.Component.extend({


  questionCart: Ember.inject.service(),

  canAddTolist: Ember.computed('questionCart.questions.[]', function(){
    // console.log(this.get('questionCart.questions.[]').includes(this));
    return this.get('questionCart.questions.[]').includes('question');
  }),

  actions: {
    addToList(question){
        this.get('questionCart').add(question);

    }
  }
});

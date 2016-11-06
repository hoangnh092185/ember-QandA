import Ember from 'ember';

export default Ember.Component.extend({
  questionCart: Ember.inject.service(),

actions: {

    addToList(question){
      console.log(question);
      this.get('questionCart').add(question);

    }
  }

});

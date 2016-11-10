import Ember from 'ember';

export default Ember.Component.extend({

  questionCart: Ember.inject.service(),
  actions: {
    addToList(question){
        this.get('questionCart').add(question);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  questionCart: Ember.inject.service(),

  actions: {
    clearList(){
      this.get('questionCart').empty()
    }
  }
});

import Component from '@ember/component';

export default Component.extend({
  classNames: ['add-user-form'],

  actions: {
    addUser(evt){
      evt.preventDefault(); //prevent native form submission
    }
  }
});

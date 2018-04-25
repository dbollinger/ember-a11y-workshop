import Component from '@ember/component';

export default Component.extend({
  classNames: ['submit-feedback-form'],

  actions: {
    submitFeedback(evt){
      evt.preventDefault(); //prevent native form submission
    }
  }
});

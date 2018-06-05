import Component from '@ember/component';

export default Component.extend({
  classNames: ['add-user-form'],

  /**
   * Indicates if the form has been submitted
   *
   * @property isSubmitted
   * @type boolean
   * @default false
   */
  isSubmitted: false,

  actions: {
    addUser(evt){
      evt.preventDefault(); //prevent native form submission

      /**
       * Do some stuff with your form data or raise an action
       */

      this.set('isSubmitted', true);
    },

    resetForm(){
      this.set('isSubmitted', false);
    }
  }
});

import Component from '@ember/component';

export default Component.extend({
  classNames: ['user-profile'],
  classNameBindings: ['isSelected:is-selected'],

  actions: {
    selectUser(){
      this.set('isSelected', true);
    }
  }
});

import Component from '@ember/component';

export default Component.extend({
  actions: {
    add(label) {
      this.get('onItemCreated')(label);
    }
  }
});

import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  items: computed(function() {
    return [];
  }),
  actions: {
    addItem(item) {
      this.get('items').pushObject(item);
    }
  }
});

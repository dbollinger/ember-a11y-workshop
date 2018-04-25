import Mixin from '@ember/object/mixin';

/**
 A mixin to lock-in tabbing and allow dismissing the component with the ESC key.

  @class FocusTrap
  @namespace Mixins
 */
export default Mixin.create({
  TAB_KEY_CODE: 9,
  ESC_KEY_CODE: 27,

  keyDown: function(event) {
    event.stopPropagation();

    if (event.keyCode === this.get("ESC_KEY_CODE")) {
      this.get('dismiss')(event);
      return;
    }

    if (event.keyCode === this.get("TAB_KEY_CODE")) {
      let tabbables = this.$('a, button, [href], input, :input, select, textarea, [tabindex]:not([tabindex="-1"])'),
          first = tabbables.filter(':first'),
          last = tabbables.filter(':last');

      if (event.target === last[0] && !event.shiftKey) {
        first.focus();
        if (this.get('didTabForward')) {
          this.get('didTabForward')(event);
        }
        return false;
      }

      if (event.target === first[0] && event.shiftKey) {
        if (this.get('didTabBackward')) {
          this.get('didTabBackward')(event);
        }
        last.focus();
        return false;
      }
    }
  }
});
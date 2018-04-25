import Component from '@ember/component';

export default Component.extend({
  classNames: ['a11y-workshop-modal'],
  attributeBindings: ['tabindex', 'ariaLabelledby:aria-labelledby', 'ariaDescribedby:aria-describedby'],

  /**
   * The value of the tabindex attribute for the modal component's wrapping element.
   * @argument tabindex
   * @type Number
   */
  tabindex: null,

  /**
   * The id of the element that labels the modal content.
   * @argument ariaLabelledby
   * @type Number
   */
  ariaLabelledby: null,

  /**
   * The id of the element that describes the modal content.
   * @argument ariaDescribedby
   * @type Number
   */
  ariaDescribedby: null,

  didRender() {

  }
});

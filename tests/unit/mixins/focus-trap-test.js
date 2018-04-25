import EmberObject from '@ember/object';
import FocusTrapMixin from 'ember-a11y-workshop/mixins/focus-trap';
import { module, test } from 'qunit';

module('Unit | Mixin | focus-trap', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let FocusTrapObject = EmberObject.extend(FocusTrapMixin);
    let subject = FocusTrapObject.create();
    assert.ok(subject);
  });
});

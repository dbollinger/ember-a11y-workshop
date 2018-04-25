import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | a11y-activities', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:a11y-activities');
    assert.ok(route);
  });
});

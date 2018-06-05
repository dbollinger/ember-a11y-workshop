import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | Exercise | focus management', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /exercises/focus-management', async function(assert) {
    await visit('/exercises/focus-management');
    await click('.exercise-3-controls>button');

    let axeOptions = {};

    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

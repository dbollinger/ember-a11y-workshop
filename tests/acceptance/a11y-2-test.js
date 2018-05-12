import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y 2 | Exercise 2', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a11y-2', async function(assert) {
    await visit('/a11y-2');

    let axeOptions = {}; //just use default options
    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

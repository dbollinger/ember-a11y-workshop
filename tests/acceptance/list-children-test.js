import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y 4 | Exercise 4', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-children', async function(assert) {
    await visit('/list-children');

    let axeOptions = {}; //just use default options
    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

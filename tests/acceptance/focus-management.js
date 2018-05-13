import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y 3 | Exercise 3', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /focus-management', async function(assert) {
    await visit('/focus-management');

    let axeOptions = {
      rules: {
        'heading-order': {
          enabled: true
        },
      }
    };

    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

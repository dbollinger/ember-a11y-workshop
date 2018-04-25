import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y 3 | Exercise 3', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a11y-3', async function(assert) {
    assert.expect(2);

    let axeOptions = {
      rules: {
        'heading-order': {
          enabled: true
        },
      }
    };

    await visit('/a11y-3');

    assert.equal(currentURL(), '/a11y-3');

    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

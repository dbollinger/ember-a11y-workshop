import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | Exercise | document structure', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /exercises/document-structure', async function(assert) {
    await visit('/exercises/document-structure');

    let axeOptions = {
      rules: {
        'heading-order': {
          enabled: true
        }
      }
    };

    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

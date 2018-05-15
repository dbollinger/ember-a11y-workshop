import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | Exercise | image description text', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /image-description', async function(assert) {
    await visit('/image-description');

    let axeOptions = {}; //just use default options
    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');
  });
});

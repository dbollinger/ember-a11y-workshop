import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y 1 | Exercise 1', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /a11y-1', async function(assert) {
    server.createList('user-profile', 10);

    await visit('/a11y-1');

    assert.equal(currentURL(), '/a11y-1');

    let axeOptions = {}; //just use default options
    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');

  });
});

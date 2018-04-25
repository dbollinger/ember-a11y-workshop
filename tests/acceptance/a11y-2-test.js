import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | a11y 2 | Exercise 2', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a11y-2', async function(assert) {
    await visit('/a11y-2');

    assert.equal(currentURL(), '/a11y-2');
  });
});

import { module, test } from 'qunit';
import { visit, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | Exercise | color contrast', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /exercises/color-contrast', async function(assert) {
    await visit('/exercises/color-contrast');

    let axeOptions = {};
    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');

    await click('.disable-brands');

    await a11yAudit(axeOptions);
    assert.ok(true, 'no a11y errors found!');

    let firstLogo = await find('.brand-logo:first-of-type');
    firstLogo.focus();

    assert.ok(true, 'no a11y errors found!');
  });
});

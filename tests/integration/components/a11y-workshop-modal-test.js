import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | a11y-workshop-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#a11y-workshop-modal}}
        Modal Content Goes Here
      {{/a11y-workshop-modal}}
    `);

    assert.equal(this.element.textContent.trim(), 'Modal Content Goes Here');
  });
});

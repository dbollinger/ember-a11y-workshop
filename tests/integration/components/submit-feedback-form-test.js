import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | submit-feedback-form | Exercise 2', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{submit-feedback-form}}`);
    assert.ok(find('.submit-feedback-form'), 'assert submit feedback form is rendered');
  });
});

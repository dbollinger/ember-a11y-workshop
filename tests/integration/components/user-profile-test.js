import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, find} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import {faker} from 'ember-cli-mirage';

module('Component | user-profile | Exercise 1', function(hooks) {
  setupRenderingTest(hooks);

  test('User profile component renders without errors.', async function(assert) {
    this.set('user', EmberObject.create({
      firstName: 'Howie',
      lastName: 'Bollinger',
      profileImage: `${faker.image.avatar()}`,
      bio: 'This is the very short biography of life of Howie.'
    }));

    await render(hbs`{{user-profile user=user}}`);

    assert.ok(find('.user-profile-info-name').textContent.trim(), 'Howie Bollinger');
  })
});
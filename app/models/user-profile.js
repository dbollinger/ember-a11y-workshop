import DS from 'ember-data';

export default DS.Model.extend({
  profileImage: DS.attr('string'),
  bio: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

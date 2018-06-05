import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(){
    return faker.name.firstName();
  },

  lastName(){
    return faker.name.lastName();
  },

  bio(){
    return faker.lorem.sentences(2);
  },

  profileImage() {
    return faker.image.avatar();
  }
});

import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Meetup from '../app/models/Meetup';
import Subscription from '../app/models/Subscription';
import File from '../app/models/File';

const models = [User, File, Meetup, Subscription];

class Database {
  constructor() {
    this.conection = new Sequelize(databaseConfig);

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.conection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.conection.models);
      }
    });
  }
}

export default new Database();

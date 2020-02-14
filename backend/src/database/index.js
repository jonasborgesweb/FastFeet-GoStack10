import Sequelize from 'sequelize';

// Importando configuração do Banco de Dados
import databaseConfig from '../config/database';

// Importando as Models do Projeto
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();

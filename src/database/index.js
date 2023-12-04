import { Sequelize } from 'sequelize'
import mongoose from 'mongoose'
import User from '../app/models/User'
import configDatabase from './../config/database'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:cC5bBc3EeaF-b45aaGf122-5-C32BAfD@viaduct.proxy.rlwy.net:25432/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:4E6DfCg23d3cG5fe1cgdgG6g6ahE-fEc@monorail.proxy.rlwy.net:20254',
    )
  }
}
export default new Database()

import { Sequelize } from "sequelize-typescript";
import config from 'config'
import DevelopmentGroups from "../models/developmentGroups";
import Meetings from "../models/meetings";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [DevelopmentGroups, Meetings ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize
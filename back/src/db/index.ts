import {Sequelize,DataTypes} from 'sequelize'
import { ArticuloFactory, Articulo as ArticuloClass } from './models/Articulo';
import { ClienteFactory, Cliente as ClienteClass } from './models/Cliente';

//import {PacienteFactory, Paciente as PacienteClass} from './models/Paciente'
//import { UserFactory, User as UserClass } from './models/User';

import { config } from 'dotenv';
config();

export interface DB {
    sequelize : Sequelize,
    Articulo: typeof ArticuloClass,
    Cliente: typeof ClienteClass,
    
} 

const {DB_NAME, DB_PORT, DB_PASS, DB_HOST, DB_USER} = process.env

export const sequelize = new Sequelize(
    `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
)

//const Paciente = PacienteFactory(sequelize);
const Articulo = ArticuloFactory(sequelize);
const Cliente = ClienteFactory(sequelize);

//Paciente.belongsToMany(Paciente, { as: 'children', foreignKey: 'parentId', through: 'pacientes_adm',timestamps:false });
//Paciente.belongsToMany(Paciente, { as: 'parent', foreignKey: 'childrenId', through: 'pacientes_adm',timestamps:false });

const db : DB = {
    sequelize,
    Articulo,
    Cliente
};

export default db;
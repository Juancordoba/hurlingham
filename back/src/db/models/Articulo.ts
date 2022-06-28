
import { 
    //Association ,
    DataTypes, 
    Model, 
    //Optional, 
    Sequelize ,
    // Belongs to many Model
//    BelongsToManyGetAssociationsMixin,
//    BelongsToManyAddAssociationMixin,
//    BelongsToManyAddAssociationsMixin,
//    BelongsToManyHasAssociationMixin,
//    BelongsToManyHasAssociationsMixin,
//    BelongsToManyCountAssociationsMixin,
//    BelongsToManyRemoveAssociationMixin,
//    BelongsToManyRemoveAssociationsMixin,
//    BelongsToManySetAssociationsMixin,
//    BelongsToManyCreateAssociationMixin,
} from 'sequelize';

import { ArticuloAttributesI } from './Interfaces'

interface ArticuloCreationAttributesI extends ArticuloAttributesI {}

export class Articulo extends Model<ArticuloAttributesI, ArticuloCreationAttributesI>
    implements ArticuloAttributesI {
        public FAMILI!:string;
        public ARTCOD!:number;
        public CARACT!:string;
        public DESCRP!:string;
        public PRPART!:number;
        public PREREP!:number;
        public STOCKS!:number;
        public HABILI!:number;

        //public getPacientes!: BelongsToManyGetAssociationsMixin<Paciente>
        //public addPaciente!: BelongsToManyAddAssociationMixin<Paciente, number>
        //public addPacientes!: BelongsToManyAddAssociationsMixin<Paciente[], number>
        //public hasPaciente!: BelongsToManyHasAssociationMixin<Paciente, number>
        //public hasPacientes!: BelongsToManyHasAssociationsMixin<Paciente[], number>
        //public countPaciente!:BelongsToManyCountAssociationsMixin;
        //public removePaciente!: BelongsToManyRemoveAssociationMixin<Paciente, number>
        //public removePacientes!: BelongsToManyRemoveAssociationsMixin<Paciente[], number>
        //public setPacientes!: BelongsToManySetAssociationsMixin<Paciente[], number>
        //public createPaciente!: BelongsToManyCreateAssociationMixin<Paciente>

        //public readonly relations?: Paciente[];

        //public static associations: {
        //    relations: Association<Paciente,Paciente>
        //}

    }

    export function ArticuloFactory(sequelize: Sequelize){
    
        Articulo.init({
            FAMILI: {
                type: DataTypes.STRING(2),
                primaryKey: true,
            },
            ARTCOD: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            CARACT: {
                type: DataTypes.STRING(10),
                primaryKey: true,
            },
            DESCRP: {
                type: DataTypes.STRING(50),
            },
            PRPART : {
                type : DataTypes.DECIMAL(18,2)
            },
            PREREP : {
                type : DataTypes.DECIMAL(18,2),
            },
            STOCKS : {
                type : DataTypes.DECIMAL(18,2),
            },
            HABILI : {
                type : DataTypes.TINYINT,
            }
        },{ 
            tableName : 'articulos',
            sequelize
         }
         
         );
         return Articulo;
    }
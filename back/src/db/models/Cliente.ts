
import { 
    //Association ,
    DataTypes, 
    Model, 
    Optional, 
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

import { ClienteAttributesI } from './Interfaces'

interface ClienteCreationAttributesI extends Optional<ClienteAttributesI, "NROCTA"> {}

export class Cliente extends Model<ClienteAttributesI, ClienteCreationAttributesI>
    implements ClienteAttributesI {
        public NROCTA!:number;
        public NOMBRE!:string;
        public NOMFAN!:string;
        public NRCUIT!:string;
        public CONIVA!:number;
        public DIRECC!:string;
        public CODPOS!:string;
        public LOCALI!:string;
        public PROVIN!:string;
        public TELFAX!:string;
        public GTEPAG!:string;
        public CONPAG!:number;
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

    export function ClienteFactory(sequelize: Sequelize){
    
        Cliente.init({
            NROCTA: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            NOMBRE: {
                type: DataTypes.STRING(50),
                primaryKey: true,
            },
            NOMFAN: {
                type: DataTypes.STRING(50),
            },
            NRCUIT : {
                type : DataTypes.STRING(15),
            },
            CONIVA : {
                type : DataTypes.INTEGER,
            },
            DIRECC : {
                type : DataTypes.STRING(50),
            },
            CODPOS : {
                type : DataTypes.STRING(8),
            },
            LOCALI : {
                type : DataTypes.STRING(25),
            },
            PROVIN : {
                type : DataTypes.STRING(25),
            },
            TELFAX : {
                type : DataTypes.STRING(40),
            },
            GTEPAG : {
                type : DataTypes.STRING(50),
            },
            CONPAG : {
                type : DataTypes.INTEGER,
            },


        },{ 
            tableName : 'clientes',
            sequelize
         }
         
         );
         return Cliente;
    }


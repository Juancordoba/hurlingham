import db, { sequelize } from './db';
import express,{Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import bodyParser from 'body-parser';

import ArticulosRoutes from './api/routes/Articulos.routes'

export default class App {
    app:Application;
    constructor(){
        config();
        this.app = express();
        this.config();
        this.middleware();
        this.routes();
    }

    config = () => {
        this.app.set('port', process.env.PORT || 4000);
        this.app.set('view engine', 'ejs');
    }

    middleware = () => {
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
        
    }

    routes = () => {

        this.app.use('/',ArticulosRoutes)
        //  this.app.use('/pacientes',PatientsRoutes)


    }


    listen = () => {

        const alter = true;
        const force = false;

        sequelize.sync({ alter, force })
        .then( async () => {
            //console.log('mysql ok')

            this.app.listen(this.app.get('port'),() => {
                console.log(`listening on port ${this.app.get('port')}`)
            })
        })
        .catch((err: any) => {
            console.log(err)
        })
   
    }

}

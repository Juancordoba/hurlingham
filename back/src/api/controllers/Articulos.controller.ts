import {Request,Response} from 'express'
import db from '../../db'
//import querystring from 'node:querystring'
//import url from 'url';
import {config} from 'dotenv';

config();

export async function findAll(req:Request, res:Response){
    const articulos = await db.Cliente.findAll({});
    res.json(articulos);
}

export async function findOne(req:Request, res:Response){
    const {famili,artcod,caract} = req.params
    const articulo = await db.Articulo.findOne({});
    res.json(articulo);
}

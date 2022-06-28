export interface ArticuloAttributesI{
    FAMILI:string,
    ARTCOD:number,
    CARACT:string,
    DESCRP:string,
    PRPART:number,
    PREREP:number,
    STOCKS:number,
    HABILI:number
}

export interface ClienteAttributesI {
    NROCTA:number,
    NOMBRE:string,
    NOMFAN:string,
    NRCUIT:string,
    CONIVA:number,
    DIRECC:string,
    CODPOS:string,
    LOCALI:string,
    PROVIN:string,
    TELFAX:string,
    GTEPAG:string,
    CONPAG:number
}


export interface CondicionesPagoAttributesI {
    CONPAG:number,
    DESCRP:string,
    PLAZO:number
}

export interface CondicionesIvaAttributesI {
    CONIVA:number,
    DESCRP:string,
    TASA01:number,
    TASA02:number
}
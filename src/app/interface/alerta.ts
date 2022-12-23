// Generated by https://quicktype.io

export interface ResultAlertas {
    ok:     boolean;
    msg:    string;
    alerta: Alerta[];
}
export interface ResultAlerta {
    ok:     boolean;
    msg:    string;
    alerta: Alerta;
}
export interface Alerta {
    id:          number;
    descripcion: string;
    lat:         number;
    lng:         number;
    foto:        null | string;
    fecha:       string;
    hora:        string;
    ciudadano:   number;
    tipo_alerta: number;
    Ciudadano:   Ciudadano;
    TipoAlertum: TipoAlertum;
}

export interface Ciudadano {
    id:       number;
    dni:      string;
    nombre:   string;
    apellido: string;
    password: string;
    estado:   number;
}
export interface TipoAlertum {
    id:          number;
    nombre:      string;
    opcion_foto: number;
    icono:       string;
    img:         string;
    color:       string;
    estado:      number;
}
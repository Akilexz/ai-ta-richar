export class TipoPublicacion {

    private TIP_PUB_ID: number;
    private NOMBRE: string;
    private ESTADO: string;



    constructor($TIP_PUB_ID: number, $NOMBRE: string, $ESTADO: string ) {
        this.TIP_PUB_ID = $TIP_PUB_ID;
        this.NOMBRE = $NOMBRE;
        this.ESTADO = $ESTADO;

    }

}

export class Publicaciones {

    private PUB_ID: number;
    private MUL_ID: number;
    private DES_ID: number;
    private TIP_PUB_ID: number;
    private NOMBRE: string;
    private TEXTO: string;
    private FECHA: Date;
    private PRIORIDAD: string;
    private TIPO: string;
    private ESTADO: string;

    constructor( $PUB_ID: number, $MUL_ID: number, $DES_ID: number, $TIP_PUB_ID: number, $NOMBRE: string, $TEXTO: string,
        $FECHA: Date, $PRIORIDAD: string, $TIPO: string, $ESTADO: string,  ) {
        this.PUB_ID = $PUB_ID;
        this.MUL_ID = $MUL_ID;
        this.DES_ID = $DES_ID;
        this.TIP_PUB_ID = $TIP_PUB_ID;
        this.NOMBRE = $NOMBRE;
        this.TEXTO = $TEXTO;
        this.FECHA = $FECHA;
        this.PRIORIDAD = $PRIORIDAD;
        this.TIPO = $TIPO;
        this.ESTADO = $ESTADO;

    }
}

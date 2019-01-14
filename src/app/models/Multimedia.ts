export class Multimedia {

    private MUL_ID: number;
    private DET_ID: number;
    private OPC_ID: number;
    private MUL_TIPO: string;
    private DESCRIPCION: string;
    constructor($MUL_ID: number, $DES_ID: number, $OPC_ID: number, $MUL_TIPO: string,
        // tslint:disable-next-line:max-line-length
        $DESCRIPCION: string ) {
        this.MUL_ID = $MUL_ID;
        this.DET_ID = $DES_ID;
        this.OPC_ID = $OPC_ID;
        this.MUL_TIPO = $MUL_TIPO;
        this.DESCRIPCION = $DESCRIPCION;
    }

}

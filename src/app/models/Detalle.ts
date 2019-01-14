export class Detalle {

    private DET_ID: number;
    private FILE_NOMBRE: string;
    private FILE_TIPO: string;
    private FILE_SIZE: number;
    private ARCHIVO: string;
    private URL: string;


    constructor($DET_ID: number, $FILE_NOMBRE: string, $FILE_TIPO: string, $FILE_SIZE: number, $ARCHIVO: string, $URL: string ) {
        this.DET_ID = $DET_ID;
        this.FILE_NOMBRE = $FILE_NOMBRE;
        this.FILE_TIPO = $FILE_TIPO;
        this.FILE_SIZE = $FILE_SIZE;
        this.ARCHIVO = $ARCHIVO;
        this.URL = $URL;

    }

}

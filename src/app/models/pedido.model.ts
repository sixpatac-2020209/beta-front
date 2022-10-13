export class PedidoModel {
  constructor(
    public CVE_DOC: string,
    public TOT_PARTIDA: string,
    public FECHAELAB: string,
    public CVE_VEND: string,
    public NOMBRE: string,
    public CVE_CLPV: string,
    public SERIE: string,
    public DATED: string,

    public DESCR: string,
    public CANT: string,
    public CVE_ART: string,
    public STR_OBS: string,
  ) { }
}

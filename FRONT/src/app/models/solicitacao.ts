export interface Solicitacao {
    id?: number;
    destino: string;
    dataPartida: string;
    dataRetorno: string;
    finalidade: string;
    criadoem?: string;
}

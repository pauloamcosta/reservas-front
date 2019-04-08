import { Pessoa } from "./pessoa";
  
  export class CheckIn{

    constructor(
        public id: number,
        public pessoa: Pessoa ,
        public dataEntrada: string,
        public dataSaida: number,
        public adicionalVeiculo: boolean,
        public valorDiarias?: string,
        public hospedagemAtiva?: boolean
    ){}
}
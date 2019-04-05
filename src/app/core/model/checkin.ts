import { Pessoa } from "./pessoa";

export interface CheckIn {
    id: number;
    nome: string;
    pessoa: Pessoa;
    dataEntrada: string;
    dataSaida: number;
    adicionalVeiculo: boolean;
    
  }
  
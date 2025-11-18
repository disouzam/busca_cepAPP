export interface CepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface GeoLocationResult {
  lat: number;
  lng: number;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

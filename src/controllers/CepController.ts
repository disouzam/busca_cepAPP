import { CepData, GeoLocationResult } from '../models/CepModel';

export async function getGeoLocationFromCep(cep: string): Promise<GeoLocationResult | null> {
  try {
    const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!cepResponse.ok) {
      throw new Error('Erro ao buscar CEP');
    }

    const cepData = (await cepResponse.json()) as CepData & { erro?: boolean };

    if (cepData.erro) return null;

    const address = `${cepData.logradouro}, ${cepData.localidade}, ${cepData.uf}`;

    const geoResponse = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address,
      )}&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'BuscaCEPApp/1.0',
        },
      },
    );

    const geoData = await geoResponse.json();

    if (!Array.isArray(geoData) || geoData.length === 0) return null;

    return {
      lat: parseFloat(geoData[0].lat),
      lng: parseFloat(geoData[0].lon),
      logradouro: cepData.logradouro,
      bairro: cepData.bairro,
      localidade: cepData.localidade,
      uf: cepData.uf,
    };
  } catch (error) {
    console.error('Erro ao buscar geolocalização:', error);
    return null;
  }
}

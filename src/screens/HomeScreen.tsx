import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Keyboard,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../styles/HomeScreen.styles';
import { getGeoLocationFromCep } from '../controllers/CepController';

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function HomeScreen() {
  const [cep, setCep] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      Alert.alert('CEP inválido', 'Digite um CEP com 8 dígitos.');
      return;
    }

    Keyboard.dismiss();
    setLoading(true);

    const geo = await getGeoLocationFromCep(cepLimpo);

    if (geo) {
      setLocation({
        latitude: geo.lat,
        longitude: geo.lng,
      });
      setAddress({
        logradouro: geo.logradouro,
        bairro: geo.bairro,
        localidade: geo.localidade,
        uf: geo.uf,
      });
    } else {
      setLocation(null);
      setAddress(null);
      Alert.alert('Não encontrado', 'Não foi possível localizar esse CEP.');
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (apenas números)"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <View style={styles.buttonWrapper}>
        <Button title="Buscar localização" onPress={handleSearch} />
      </View>

      {loading && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
          <Text>Buscando endereço e localização...</Text>
        </View>
      )}

      {!loading && !location && (
        <Text style={styles.emptyText}>Digite um CEP e toque em &quot;Buscar localização&quot;.</Text>
      )}

      {!loading && location && (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="Localização do CEP" />
          </MapView>

          {address && (
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Rua: {address.logradouro}</Text>
              <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
              <Text style={styles.addressText}>
                Cidade: {address.localidade} - {address.uf}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

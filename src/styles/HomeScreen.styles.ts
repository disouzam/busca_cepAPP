import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    marginBottom: 16,
  },
  map: {
    flex: 1,
    marginTop: 16,
    borderRadius: 8,
  },
  addressContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 10,
    elevation: 2,
  },
  addressText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  loadingWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#777',
  },
});

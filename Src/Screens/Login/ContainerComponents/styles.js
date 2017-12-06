import {StyleSheet } from 'react-native';

   module.exports = StyleSheet.create ({
    container: {
      padding: 20,
    },
  input: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    height: 40,
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#f39c12',
    padding: 20,
    height: 50,
    borderRadius: 20,
  },
  textButton: {
  textAlign: 'center',
  color: '#7f8c8d',
  fontWeight: 'bold',
  fontSize: 15,
  borderRadius: 2,
  },
  contentView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', 
    borderRadius: 20,
    padding: 20,
  },
  });
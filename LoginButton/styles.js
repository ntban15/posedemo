import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4daab8',
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: 'DejaVuSerifCondensed',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  title: {
    fontFamily: 'DejaVuSerifCondensed-Bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginBottom: 12,
  },
  inputText: {
    fontFamily: 'DejaVuSerifCondensed',
    fontSize: 16,
    color: 'black',
  },
  confirmText: {
    fontFamily: 'DejaVuSerifCondensed',
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  inputItem: {
    width: 200,
    height: 70,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 16,
  },
  confirmButton: {
    marginTop: 20,
    width: 100,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#b8514d',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});

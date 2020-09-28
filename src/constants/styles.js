import {StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

import colors from './colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  ball: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 25,
    borderColor: colors.black,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  cardButton: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.lightBlack,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  cardText: {
    fontSize: 16,
    height: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: colors.gray,
    textAlign: 'center',
  },
})

import {StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

import colors from './colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignSelf: 'center',
    marginTop: 10,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
})

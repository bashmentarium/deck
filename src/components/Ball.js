import React from 'react'
import {View, Animated} from 'react-native'

import styles from '../constants/styles'

const Ball = () => {
  const position = new Animated.ValueXY({x: 170, y: 0})

  Animated.spring(position, {
    toValue: {
      x: 170,
      y: 600,
    },
  }).start()

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  )
}

export default Ball

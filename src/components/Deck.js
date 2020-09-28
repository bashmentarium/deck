import React, {useState, useEffect} from 'react'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
} from 'react-native'

import styles from '../constants/styles'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250

const defaultSwipe = () => {}

const Deck = ({
  data,
  renderCard,
  onSwipeRight = defaultSwipe,
  onSwipeLeft = defaultSwipe,
  renderNoMoreCards,
}) => {
  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring()
  }, [cardIndex])

  useEffect(() => {
    setCardIndex(0)
  }, [data])

  const position = new Animated.ValueXY()

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      // The great link between the Animation and PanResponder modules
      position.setValue({x: gesture.dx, y: gesture.dy})
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right')
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left')
      } else {
        resetPosition()
      }
    },
  })

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    })

    return {
      ...position.getLayout(),
      transform: [{rotate}],
    }
  }

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start()
  }

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH + 20 : -SCREEN_WIDTH - 20

    Animated.timing(position, {
      toValue: {x, y: 0},
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete(direction)
    })
  }

  const onSwipeComplete = (direction) => {
    const item = data[cardIndex]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)

    // Get the next card ready for swipeage
    setCardIndex(cardIndex + 1)

    // Reset the new swipeable card's position
    position.setValue({x: 0, y: 0})
  }

  const renderCards = () => {
    if (cardIndex >= data.length) {
      return renderNoMoreCards()
    }

    return data
      .map((card, index, array) => {
        if (index < cardIndex) {
          return null
        } else if (index === cardIndex) {
          return (
            <Animated.View
              key={card.id}
              style={[getCardStyle(), styles.cardStyle]}
              {...panResponder.panHandlers}
            >
              {renderCard(card)}
            </Animated.View>
          )
        }
        return (
          <Animated.View
            key={card.id}
            style={{...styles.cardStyle, top: 10 * (index - cardIndex)}}
          >
            {renderCard(card)}
          </Animated.View>
        )
      })
      .reverse()
  }

  return <View>{renderCards()}</View>
}

export default Deck

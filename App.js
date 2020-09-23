import React from 'react'
import {ScrollView, View, Text, Image} from 'react-native'
import {Card, Button, Icon} from 'react-native-elements'

import Deck from './src/components/Deck'
import {one, two, three, four, five, six, seven, eight} from './src/images'

import styles from './src/constants/styles'

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: one,
  },
  {
    id: 2,
    text: 'Card #2',
    uri: two,
  },
  {
    id: 3,
    text: 'Card #3',
    uri: three,
  },
  {
    id: 4,
    text: 'Card #4',
    uri: four,
  },
  {
    id: 5,
    text: 'Card #5',
    uri: five,
  },
  {
    id: 6,
    text: 'Card #6',
    uri: six,
  },
  {
    id: 7,
    text: 'Card #7',
    uri: seven,
  },
  {
    id: 8,
    text: 'Card #8',
    uri: eight,
  },
]

export default function App() {
  const renderCard = ({id, text, uri}) => {
    return (
      <Card key={id}>
        <Card.Title>{text}</Card.Title>
        <Card.Divider />
        <Image source={uri} style={styles.image} resizeMode='cover' />
        <Text style={styles.cardText}>I can customize the Card further.</Text>
        <Button
          style={styles.cardButton}
          icon={<Icon name='code' color='#ffffff' />}
          title='Press me'
        />
      </Card>
    )
  }

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>All done</Card.Title>
        <Text style={styles.cardText}>There's no more content here</Text>

        <Button
          style={styles.cardButton}
          icon={<Icon name='code' color='#ffffff' />}
          title='Get More!'
        />
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        onSwipeRight={() => {}}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  )
}

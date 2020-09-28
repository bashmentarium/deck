import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'

import Deck from './src/components/Deck'
import {one, two, three, four, five, six, seven, eight} from './src/images'

import styles from './src/constants/styles'

const DATA = [
  {
    id: 1,
    text: 'Drill set 2-8 mm 6pcs',
    uri: one,
    descr: 'AKD1055 is made of high quality steel.',
  },
  {
    id: 2,
    text: 'Set of 8 combined keys',
    uri: two,
    descr: 'Suitable for car repair shops or industrial production.',
  },
  {
    id: 3,
    text: 'Chain saw 100W CGSLI',
    uri: three,
    descr:
      'Perfect arrangement of the handles that gives increased maneuverability to cuts.',
  },
  {
    id: 4,
    text: 'Gasoline motor pump',
    uri: four,
    descr: 'Suction and discharge port diameter: 75mm.',
  },
  {
    id: 5,
    text: 'DC12V car compressor',
    uri: five,
    descr:
      'High pressure air compressor, ideal for inflating car and bicycle tires, balls, rafts.',
  },
  {
    id: 6,
    text: 'Angle grinder 2600W',
    uri: six,
    descr:
      'The shredder is equipped with a 2600 W motor and a two-position handle.',
  },
  {
    id: 7,
    text: 'Rotary hammer 1500W',
    uri: seven,
    descr:
      'The RH150028 rotary hammer has a powerful hammer drilling mechanism.',
  },
  {
    id: 8,
    text: 'Finishing grinder',
    uri: eight,
    descr: 'Vibrating sander INGCO FS3208 is designed for sanding plywood.',
  },
]

export default function App() {
  const renderCard = ({id, text, uri, descr}) => {
    return (
      <Card key={id}>
        <Card.Title>{text}</Card.Title>
        <Card.Divider />
        <Image source={uri} style={styles.image} resizeMode='cover' />
        <Text style={styles.cardText}>{descr}</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </Card>
    )
  }

  const renderNoMoreCards = () => {
    return (
      <Card style={styles.card}>
        <Card.Title>All done</Card.Title>
        <Text style={styles.cardText}>There's no more content here</Text>

        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
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

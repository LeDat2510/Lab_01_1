import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Square = ({text, bgColor = "#7ce0f9"}) => (
  <View style={[styles.box, {backgroundColor: bgColor}]}>
    <Text>{text}</Text>
  </View>
)

const Project5Screen = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor='#4dc2c2'/>
      <Square text="Square 1" bgColor='#ff637c'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Project5Screen
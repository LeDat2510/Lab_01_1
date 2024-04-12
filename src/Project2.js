import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'

const Project2Screen = () => {
  return (
    <View style={MyStyle.container}>
      <Button title='Button 1' onPress={() => alert("Hello 1")}></Button>
      <TouchableOpacity style={MyStyle.button} onPress={() => alert("Hello 2")}>
        <Text style={MyStyle.text}>
          Button 2
        </Text>
      </TouchableOpacity>
    </View>
  )
}

var MyStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  button: {
    backgroundColor: 'blue',
    marginTop: 10,
    alignItems: 'center',
    padding: 10
  },

  text: {
    color: 'white',
    fontSize: 18
  }
})

export default Project2Screen
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "#ff637c",
        alignSelf: "center",
        padding: 10,
        margin: 10,
        ...props.buttonStyle,
      }}
    >
      <Text style={{ color: "#fff" }}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const Project3Screen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button text="Say hello" onPress={() => alert("hello!")} />
      <Button text="Say goodbye" onPress={() => alert("goodbye!")} buttonStyle={{ backgroundColor: "#4dc2c2" }} />
    </View>
  )
}

export default Project3Screen
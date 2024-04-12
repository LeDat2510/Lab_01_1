import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>Bài Tập Lab_1</Text>
      <Button title="Project 1. Hello world" onPress={() => navigation.navigate('Project1')}/>
      <Button title="Project 2. Caturing Taps" onPress={() => navigation.navigate('Project2')}/>
      <Button title="Project 3. Custom component" onPress={() => navigation.navigate('Project3')}/>
      <Button title="Project 4. State and Props" onPress={() => navigation.navigate('Project4')}/>
      <Button title="Project 5. Styling" onPress={() => navigation.navigate('Project5')}/>
      <Button title="Project 6. Scrollable Content" onPress={() => navigation.navigate('Project6')}/>
      <Button title="Project 7. Building a Form" onPress={() => navigation.navigate('Project7')}/>
      <Button title="Project 8. Long Lists" onPress={() => navigation.navigate('Project8')}/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default HomeScreen
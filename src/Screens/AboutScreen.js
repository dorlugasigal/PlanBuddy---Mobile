import React from 'react';
import { View, Text,StyleSheet } from 'react-native'

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hackathon AISTQ PlanBuddy Group</Text>
        <Text style={styles.text}>Daniel Morad Saka</Text>
        <Text style={styles.text}>Haim Leshem</Text>
        <Text style={styles.text}>Nadav Avisar</Text>
        <Text style={styles.text}>Dor Lugasi</Text>
        <Text style={styles.text}>Maor Israel</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
  },
  text: {
    marginTop:'2%',
    marginBottom:'2%',
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center'
  },
})
export default AboutScreen
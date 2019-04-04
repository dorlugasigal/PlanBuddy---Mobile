import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Buy Premium</Text>
        <Text style={styles.text}><Icon name='md-checkmark-circle-outline' color={'green'} size={25}/> Edit Schedule in-app!</Text>
        <Text style={styles.text}><Icon name='md-checkmark-circle-outline' color={'green'} size={25}/> Option to Add more children</Text>
        <Text style={styles.text}><Icon name='md-checkmark-circle-outline' color={'green'} size={25}/> Option to update phone numbers</Text>
        <TouchableOpacity
          style={styles.submitButton}
          >
          <Text style={styles.submitButtonText}> Buy Now </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "flex-start",
      padding:'5%'
  },
  text: {
    marginTop:'5%',
    marginBottom:'5%',
    fontSize: 15,
    fontWeight:'bold',
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    width: '90%',
    height: 40,
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
  }
})
export default AboutScreen

import React from 'react';
import { Image, Alert, Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//import DeviceInfo from 'react-native-device-info';

class RegisterScreen extends React.Component {
  // componentDidMount(){
  //   phone = DeviceInfo.getPhoneNumber();
  //   alert(JSON.stringify(phone));
  // }

  state = {
    email: '',
    name: '',
    password: '',
    phone: '',
    children: [],
    textInput: []
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handlePhone = (text) => {
    this.setState({ phone: text })
  }
  handleKidsName = (text) => {
    this.setState({ kidsName: text })
  }
  handleKidsPhoneNumber = (text) => {
    this.setState({ kidsPhone: text })
  }
  handleName = (text) => {
    this.setState({ name: text })
  }

  addKid = () => {
    //send SMS.then
    //{
    //ask for number
    //and push to children
    //}
  }
  addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput style={styles.shortInput}
          underlineColorAndroid="transparent"
          placeholder="Kids Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleKidsName} />

        <TextInput style={styles.shortInput}
          underlineColorAndroid="transparent"
          placeholder="Kids Phone Number"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleKidsPhoneNumber} />
      </View>
    );
    this.setState({ textInput })
  }

  RegisterParent = () => {
    
    if (!this.state.email) {
      alert("You must enter an email address ");
      return;
    }
    else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.state.email.match(reg)) {
        alert("Your email is invalid");
        return;
      }
    }
    if (!this.state.password) {
      alert("You must enter a password ");
      return;
    }
    else {
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if (!this.state.password.match(passwordRegex)) {
        alert("Your password is not strong enough");
        return;
      }
    }
    if (!this.state.phone) {
      alert("You must enter a phone number ");
      return;
    }
    if (!this.state.name) {
      alert("You must enter your name");
      return;
    } else {
      //everything is ok
      //register parent in server side
      global.name= this.state.name;
      global.children=[];
      this.props.navigation.navigate('AddChildrenScreen')
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop:30, }}>
         <Image    style = {{ width: 200, height: 200 }} source = {require('../../assets/Logo.png')} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Full Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleName} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Phone"
          placeholderTextColor="#9a73ef"
          keyboardType={'numeric'}
          autoCapitalize="none"
          value={this.state.phone}
          onChangeText={this.handlePhone} /> 

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.RegisterParent()
          }>
          <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    paddingLeft: 10,
    height: 40,
    width: '80%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor:'#f8effb'
  },
  shortInput: {
    margin: 15,
    paddingLeft: 10,
    height: 40,
    width: '40%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 25
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    width: '30%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white'
  }
})
export default RegisterScreen
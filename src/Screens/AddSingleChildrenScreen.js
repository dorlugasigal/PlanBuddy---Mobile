
import React from 'react';
import { Alert, Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class AddSingleChildrenScreen extends React.Component {

  state = {
    messageSent: false,
    code: ''
  }
  componentDidMount() {
    this.setState({ messageSent: false });
  }
  checkKidsName = () => {
    if (global.kidsName && global.kidsName) {
      if (!global.children.includes({ name: global.kidsName, phone: global.kidsphoneNumber })) {
        global.children.push({ name: global.kidsName, phone: global.kidsphoneNumber });
      }
      this.props.navigation.navigate('AddChildrenScreen');
    }
    else {
      alert("please fill all fields");
    }
  }
  SendSMS = () => {
    this.setState({ messageSent: true });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
        <Text> Hello {global.name}</Text>
        <Button title='Add' disabled={(!(this.state.messageSent && this.state.code != ''))} onPress={this.checkKidsName} />
        <Text>
          this.state.messageSent
          {this.state.messageSent.toString()}
        </Text>
        <Text>
          this.state.code
          {this.state.code.toString()}
        </Text>
        <TextInput style={styles.shortInput}
          underlineColorAndroid="transparent"
          placeholder="Kids Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => global.kidsName = text} />

        <TextInput style={styles.shortInput}
          underlineColorAndroid="transparent"
          placeholder="Kids Phone Number"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType={'numeric'}
          onChangeText={(text) => global.kidsphoneNumber = text}>
        </TextInput>

        <TextInput style={styles.shortInput}
          underlineColorAndroid="transparent"
          placeholder="SMS CODE"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          editable={this.state.messageSent}
          onChangeText={(text) => this.setState({ code: text })}>
        </TextInput>
        <Button title='Send SMS' onPress={this.SendSMS} />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23
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
    width: '90%',
    height: 40,
    borderRadius: 25
  },
  submitButtonText: {
    color: 'white'
  }
})
export default AddSingleChildrenScreen
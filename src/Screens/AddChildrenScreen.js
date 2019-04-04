
import React from 'react';
import { FlatList, Image, Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class AddChildrenScreen extends React.Component {
  finish = () => {
  }
  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
      <Text style={{ margin: 20 }}>
        {item.name}
      </Text>
      <Text style={{ margin: 20 }}>
        {item.phone}
      </Text>
    </View>
  )


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 30, }}>
        <Image style={{ width: 200, height: 200 }} source={require('../../assets/Logo.png')} />
        <Text style={{ fontWeight: "bold", }}>Hello {global.name}</Text>
        <Button style={{
          backgroundColor: '#7a42f4',
          padding: 10,
          margin: 15,
          width: '30%',
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }} title='Add your kid' onPress={() => {
          this.props.navigation.navigate('AddSingleChildrenScreen')
        }}
        />

        <FlatList
          data={global.children}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title='FINISH' style={{
          backgroundColor: '#7a42f4',
          padding: 10,
          margin: 15,
          width: '30%',
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          this.props.navigation.navigate('MainScreen');
        }}></Button>
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
    borderRadius: 25
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
export default AddChildrenScreen
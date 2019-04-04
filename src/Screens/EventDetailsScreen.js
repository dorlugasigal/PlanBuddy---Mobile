import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView, CheckBox } from 'react-native';
import NoPreview from "../../assets/side-background.png"
import { FlatList } from 'react-native-gesture-handler';
import Emoji from '../../assets/Blow_Kiss_Emoji.png'

class WheresMyKidScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      value: false
    }
  }
  _handleImage = (Image) => {
    if (Image == null) {
      return false;
    }
    else {
      return true;
    }
  }
  onChangeValue = () => {
    this.state.value == false ? this.setState({ value: true }) : this.setState({ value: false })
  }
  _keyExtractor = (item, index) => item;
  _renderItem = ({ item }) => (
    console.log(item.actionList),
    <View style={styles.item}>
      <CheckBox />
      <Text style={styles.text}>{item}</Text>
    </View>
  )
  render() {
    console.log(Emoji)
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    imageUrl = item.image;
    /**
     * scroll view of task image and action list
     */
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollview}>
            {this._handleImage(imageUrl) ?
              <Image
                style={styles.image}
                source={{ uri: imageUrl }}
              />
              : <Image
                style={styles.image}
                source={NoPreview}
              />}
            {/** 
            flat list of action list 
            **/}
            <View style={styles.flatlist}>
              <FlatList
                data={item.actionList}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
              />
            </View>
            {item.note == null ?
              <Text style={styles.text}>Have a nice day Honey  <Image style={{ height: 26, width: 26 }} resizeMethod={'scale'} source={Emoji} /></Text>
              :
              <View><Text>{item.note}</Text>}</View>}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: '#f7e4fe'

  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    marginBottom: '3%',
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  scrollview: {
    flex: 1,
    height: '95%',
    alignItems: 'center',
    alignContent: 'space-between'
  },
  text: {
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  flatlist: {
    flex: 1,
    height: '50%',

  }
});
export default WheresMyKidScreen
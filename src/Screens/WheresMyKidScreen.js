import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native'
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

class WheresMyKidScreen extends React.Component {
  render() {
    return (
    //   <Image source={require('../../assets/maps.png')}
    //   style={styles.backgroundImage}>
    // </Image>    
    <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 31.777059, 
          longitude: 34.626719,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
export default WheresMyKidScreen
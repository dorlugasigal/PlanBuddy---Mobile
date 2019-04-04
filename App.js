import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator, createAppContainer, DrawerItems } from 'react-navigation'
import Icon from "@expo/vector-icons/Ionicons"
import AddChildrenScreen from "./src/Screens/AddChildrenScreen"
import AddSingleChildrenScreen from "./src/Screens/AddSingleChildrenScreen"
import AboutScreen from "./src/Screens/AboutScreen"
import ScheduleScreen from "./src/Screens/ScheduleScreen"
import RegisterScreen from "./src/Screens/RegisterScreen"
import BuyPremiumScreen from "./src/Screens/BuyPremiumScreen"
import WheresMyKidScreen from "./src/Screens/WheresMyKidScreen"
import ViewMyKidsScreen from "./src/Screens/ViewMyKidsScreen"
import EventDetailsScreen from "./src/Screens/EventDetailsScreen"


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
      source={require('./assets/side-background.png')}
      style={{ resizeMode: 'stretch' }}>
      <View style={{ height: 150 }}>
      </View>
    </ImageBackground>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <Button
      onPress={() => {
        global.dark = true
      }}
      title="Toggle Dark Mode"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />

    
  </SafeAreaView>
)
const SideMenuDrawer = createDrawerNavigator({
  "Schedule" : ScheduleScreen,
  "Wheres My Kid" : WheresMyKidScreen,
  "Buy Premium": BuyPremiumScreen,
  "About": AboutScreen
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#b745dd',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },

        headerTitleStyle: {
          fontSize: 18
        }

      }
    },
    contentComponent: CustomDrawerComponent
  },
);

const AppStack = createStackNavigator({
  MainScreen: SideMenuDrawer,
  ScheduleScreen: ScheduleScreen,
  ViewMyKidsScreen: ViewMyKidsScreen,
  EventDetailsScreen: EventDetailsScreen
},
  {
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="md-menu"
            size={35}
            style={{ paddingLeft: 10 }}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        )
        
      }
    }
  }
);
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    RegisterScreen: RegisterScreen,
    AddChildrenScreen: AddChildrenScreen,
    AddSingleChildrenScreen: AddSingleChildrenScreen,
    MainScreen: AppStack
  },
  {
    initialRouteName: 'MainScreen'//'RegisterScreen', //if we would have a login screen,  change it here
  }
));


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

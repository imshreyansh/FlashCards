import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import Decks from './components/Decks'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/notification'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs=createMaterialTopTabNavigator ({
    Decks:{
        screen:Decks,
         navigationOptions: {
      tabBarLabel: 'Deck',
    },
    },
    NewDeck:{
        screen:NewDeck,
         navigationOptions: {
      tabBarLabel: 'New Deck',
    },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            backgroundColor: '#220901'
        }
    }
})

const MainNavigator=createStackNavigator({
 Home: {
    screen: Tabs,
    navigationOptions:{
        header:null
    }
  },
  Deck:{
    screen:Deck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#220901',
      }
    }
  },
  AddCard:{
    screen:AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#220901',
      }
    }
  },
  Quiz:{
    screen:Quiz,
    navigationOptions: {
      title:'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#220901',
      }
    }
  }
})
export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor='#220901' barStyle="light-content" />
          <MainNavigator />
        </View>
     </Provider>
    );
  }
}

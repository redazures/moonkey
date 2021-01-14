/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import SafeScreen from './app/components/SafeScreen'

import { ListItem, Avatar } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Keeshond_Sibirian_Husky_crossbreed_puppy.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Keeshond_Sibirian_Husky_crossbreed_puppy.jpg',
    subtitle: 'Vice Chairman'
  },
]

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider >
            <Avatar source={{uri: l.avatar_url}}/>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  avatar:{
    backgroundColor:'pink',
  },
})

import React, {Component} from 'react';
import RootStore from './mobx';
import {Provider} from 'mobx-react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import Nav from './src/nav';
// axios
//   .get(
//     'https://h5.shuixiongkeji.net/sh5/LegionRanking?type=1&legion_level_id=&time=2021%2F03%2F12',
//   )
//   .then((res) => {
//     console.log(res);
//   });

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <Nav></Nav>
    </View>
  );
};

export default App;

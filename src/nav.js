import React from 'react';
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
// axios
//   .get(
//     'https://h5.shuixiongkeji.net/sh5/LegionRanking?type=1&legion_level_id=&time=2021%2F03%2F12',
//   )
//   .then((res) => {
//     console.log(res);
//   });
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/account/login';
import UserInfo from './pages/account/userInfo';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="详情页"
        onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>详情页</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Nav: () => React$Node = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}> */}
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Nav;

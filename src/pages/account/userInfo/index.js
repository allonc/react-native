import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 32, color: 'blue'}}>填写资料</Text>
            <Text style={{fontSize: 24, color: '#808080'}}>提升个人魅力</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Index;

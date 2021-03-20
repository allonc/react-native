import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
@inject('RootStore')
@observer
class Index extends Component {
  state = {};
  handleName = () => {
    this.props.RootStore.changeName('heell');
    console.log(this.props.RootStore.name);
  };
  render() {
    return (
      <View>
        <Text onPress={this.handleName}>Btn:{this.props.RootStore.name}</Text>
      </View>
    );
  }
}

export default Index;

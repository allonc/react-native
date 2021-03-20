import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'teaset';
import Toast from '../../../utils/Toast';
import Button from '../../../components/Button';
import request from '../../../utils/request';
import {GET_CODE, LOGIN} from '../../../utils/api';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
class Index extends Component {
  state = {
    phoneNumber: '',
    showLogin: false,
    code: '',
    codeTxt: '重新获取',
    isGet: false,
    codeImg: undefined,
    key: '',
  };
  constructor() {
    super();
    this.getCode();
  }
  //获取验证码图片
  getCode = () => {
    request.get(GET_CODE).then((res) => {
      this.setState({codeImg: res.img, key: res.key});
    });
  };
  phoneChangeText = (num) => {
    this.setState({phoneNumber: num}, () => {
      console.log(this.state.phoneNumber);
    });
  };
  NumbenSubmitEditing = () => {
    console.log('点击完成');
    Toast.showLoading('点击完成');
  };
  login = () => {
    console.log('login');
    this.setState({showLogin: false});
  };
  codeChange = (txt) => {
    this.setState({code: txt});
  };
  //登录框手机号码输入
  renderLogin = () => {
    return (
      <View>
        <View>
          <Text style={{fontSize: 24}}>手机号码登录注册</Text>
        </View>
        <View>
          <Input
            placeholder="请输入手机号码"
            maxLength={11}
            keyboardType="phone-pad"
            style={{width: 200, marginTop: 24}}
            onChangeText={this.phoneChangeText}
            onSubmitEditing={this.NumbenSubmitEditing}
          />
        </View>
        <View style={{height: 40, marginTop: 10}}>
          <Button onPress={this.login}>获取验证码</Button>
        </View>
      </View>
    );
  };
  //验证码输入
  renderCode = () => {
    return (
      <View>
        <View>
          <Text>填写验证码</Text>
          <Text>已发送到{this.state.phoneNumber}</Text>
        </View>
        <View>
          <CodeField
            value={this.state.code}
            onChangeText={this.codeChange}
            onSubmitEditing={this.submitCode}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                style={[styles.cells, isFocused && styles.focusCell]}
                key={index}>
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{width: '100%', height: 100, marginVertical: 20}}>
          <TouchableOpacity onPress={this.getCode}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: this.state.codeImg}}
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 40, marginTop: 10}}>
          <Button disabled={this.state.isGet} onPress={this.reGetCode}>
            {this.state.codeTxt}
          </Button>
        </View>
        <View style={{height: 40, marginTop: 10}}>
          <Button disabled={this.state.isGet} onPress={this.submit}>
            登录
          </Button>
        </View>
      </View>
    );
  };
  //提交登录信息
  submit = () => {
    let params = {
      username: 'sxkj',
      password: 'Qk#112233',
      key: this.state.key,
      code: this.state.code,
    };
    console.log(params);
    request.post(LOGIN, params).then((res) => {
      console.log(res);
    });
  };
  //发送验证码
  submitCode = () => {
    this.props.navigation.navigate('UserInfo');
  };
  //验证码定时器
  countDown = () => {
    console.log('定时器开始');
    this.state.isGet = true;
    let sec = 5;
    this.setState({codeTxt: `重新获取${sec}s`});

    let timeId = setInterval(() => {
      sec--;
      this.setState({codeTxt: `重新获取${sec}s`});
      if (sec === 0) {
        this.state.isGet = false;

        clearInterval(timeId);
        this.setState({codeTxt: `重新获取`});
      }
    }, 1000);
  };
  //点击重新获取
  reGetCode = () => {
    if (this.state.isGet) return;
    this.countDown();
  };
  render() {
    return (
      <View>
        <StatusBar translucent={true} />
        <Image
          style={{width: '100%', height: 300}}
          source={require('../../../../images/gohan.jpg')}
        />
        <View style={{padding: 32}}>
          {this.state.showLogin ? this.renderLogin() : this.renderCode()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    textAlign: 'center',
    color: '#7d53ea',
  },
  cells: {
    borderBottomWidth: 2,
    borderColor: '#00000030',
  },
  focusCell: {
    borderColor: '#7d53ea',
  },
});
export default Index;

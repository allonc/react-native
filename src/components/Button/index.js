import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Index extends Component {
  static defaultProps = {
    style: {},
    textStyle: {},
    disabled: false,
  };
  render() {
    return (
      // Within your render function
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          ...this.props.style,
          overflow: 'hidden',
        }}
        disabled={this.props.disabled}
        onPress={this.props.onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#9b63cd', '#e0708c']}
          style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...this.props.textStyle}}>
            {this.props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 50,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    lineHeight: 40,
  },
});
export default Index;

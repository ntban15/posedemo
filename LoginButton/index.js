import React from 'react';
import { TouchableOpacity, Text, TextInput, Animated } from 'react-native';
import posed from 'react-native-pose';

import styles from './styles';

const openTransition = ({ value, toValue, useNativeDriver }) =>
  Animated.spring(value, { toValue, useNativeDriver, bounciness: 12 });
const closeTransition = ({ value, toValue, useNativeDriver }) =>
  Animated.spring(value, { toValue, useNativeDriver, bounciness: 8 });

const Button = posed(TouchableOpacity)({
  normal: {
    height: 50,
    width: 100,
    transition: closeTransition,
  },
  clicked: {
    height: 350,
    width: 250,
    transition: openTransition,
    staggerChildren: 50,
  },
});

const childrenConfig = {
  normal: {
    y: -100,
    opacity: 0,
    scale: 0,
  },
  clicked: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const InputItem = posed.View(childrenConfig);

/* eslint-disable-next-line */
const InputItemWithText = ({ placeholder, secureTextEntry }) => (
  <InputItem style={styles.inputItem}>
    <TextInput
      underlineColorAndroid="transparent"
      selectionColor="#4daab8"
      style={styles.inputText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </InputItem>
);

const Title = posed.Text(childrenConfig);
const ConfirmButton = posed(TouchableOpacity)(childrenConfig);

export default class AnimatedButton extends React.PureComponent {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <Button
        style={styles.button}
        pose={this.state.isOpen ? 'clicked' : 'normal'}
        onPress={() => this.setState({ isOpen: true })}
        disabled={this.state.isOpen}
        activeOpacity={0.8}
      >
        {!this.state.isOpen ? <Text style={styles.buttonText}>Login</Text> : null}

        <Title style={styles.title}>Welcome</Title>
        <InputItemWithText placeholder="Username" />
        <InputItemWithText placeholder="Password" secureTextEntry />
        <ConfirmButton
          onPress={() => this.setState({ isOpen: false })}
          style={styles.confirmButton}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </ConfirmButton>
      </Button>
    );
  }
}

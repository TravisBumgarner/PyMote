import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View>
        <Text>
          Hello World from Home.
        </Text>
      </View>
    );
  }
}

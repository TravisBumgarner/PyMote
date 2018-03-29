import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Home } from './_entry';

import { appStyle } from '../theme';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={appStyle}>
        <Home />
      </View>
    );
  }
}

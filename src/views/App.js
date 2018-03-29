import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Home } from './_entry';

const style = {
  app: {
    flex: 1,
  },
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.app}>
        <Home />
      </View>
    );
  }
}

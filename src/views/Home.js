import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

import {
  Card,
  CardItem,
  Header,
  Button,
} from '../components';

import {
  CreateUpdateDevice
} from '../containers';

export default class Home extends Component<Props> {
  handleOnPress = () => { alert('hi'); };

  render() {
    return (
      <ScrollView>
        <Header text="Device Coniguration" />
        <Button onPress={this.handleOnPress}>Add Device</Button>
        <CreateUpdateDevice />
      </ScrollView>
    );
  }
}

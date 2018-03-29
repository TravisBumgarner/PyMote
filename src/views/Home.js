import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  Text,
} from 'react-native';

import { Card, CardItem, Header } from '../components';

import { buttonStyle } from '../theme';

export default class Home extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Header text="Test" />
        <Card>
          <CardItem>
            <Text>
              Hi
            </Text>
          </CardItem>
        </Card>
        <Button title="Add Device" color={buttonStyle.color} onPress={this.create} />
      </ScrollView>
    );
  }
}

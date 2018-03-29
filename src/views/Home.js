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

import { buttonStyle } from '../theme';

export default class Home extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Header text="Test" />
        <Card>
          <CardItem>
            <Button text="SUPP" />
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

import { Card, CardItem, } from '../components';

import { buttonStyle } from '../theme';

import { Header } from '../components';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View>
        <Header text={'Test'}/>
        <Button title={'Hi'} color={buttonStyle.color} onPress={() => alert('hi')}/>
        <Card>
          <CardItem>
            <Text>Hi</Text>
          </CardItem>

        </Card>
        <Card>
          <CardItem>
            <Text>Hi</Text>
          </CardItem>

          <CardItem>
            <Text>Hi</Text>
          </CardItem>

        </Card>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
} from 'react-native';

import {
  CardItem,
} from '../components';

import { COLORS } from '../theme';

const style = {
  form: {
    flexDirection: 'column',
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: COLORS.LIGHT_GRAY,
    borderWidth: 1,
    flex: 1,
  },
  view: {
    flex: 1,
  },
};

export default class CreateUpdateDevice extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      host: '',
      port: 0,
      deviceName: '',
    };
  }

  render() {
    const {
      host,
      port,
      deviceName,
    } = this.state;

    return (
      <CardItem>
        <View style={style.form}>
          <View style={style.view}>
            <Text>Host:</Text>
            <TextInput
              style={style.textInput}
              onChangeText={i => this.setState({ host: i })}
              value={host}
            />
          </View>

          <View style={style.view}>
            <Text>Port:</Text>
            <TextInput
              style={style.textInput}
              onChangeText={i => this.setState({ port: i })}
              value={port}
            />
          </View>

          <View style={style.view}>
            <Text>Device Name:</Text>
            <TextInput
              style={style.textInput}
              onChangeText={i => this.setState({ deviceName: i })}
              value={deviceName}
            />
          </View>
        </View>
      </CardItem>
    );
  }
}

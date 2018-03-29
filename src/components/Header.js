import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    const {
      text,
    } = this.props;

    return (
      <View>
        <Text>
          { text }
        </Text>
      </View>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};


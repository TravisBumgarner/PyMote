import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

const Header = (props) => {
  const {
    text,
  } = props;

  return (
    <View>
      <Text>
        { text }
      </Text>
    </View>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
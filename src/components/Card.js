import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import { cardStyle } from "../theme";

const Card = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={cardStyle}>
      { children }
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;



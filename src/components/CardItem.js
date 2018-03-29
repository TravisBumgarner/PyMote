import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import { cardItemStyle } from '../theme';

const CardItem = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={cardItemStyle}>
      { children }
    </View>
  );
};

CardItem.propTypes = {
  children: PropTypes.any,
};

CardItem.defaultProps = {
  children: '',
};


export default CardItem;

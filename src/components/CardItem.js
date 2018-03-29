import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import { COLORS } from '../theme';

const style = {
  cardItem: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: COLORS.LIGHT_GRAY,
    position: 'relative',
  }
};


const CardItem = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={style.cardItem}>
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

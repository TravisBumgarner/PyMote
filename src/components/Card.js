import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import { COLORS } from '../theme';

const style = {
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 0,
    shadowColor: COLORS.WHITE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={style.card}>
      { children }
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};

Card.defaultProps = {
  children: '',
};

export default Card;

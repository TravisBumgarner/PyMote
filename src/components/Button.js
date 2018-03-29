import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { COLORS } from '../theme';

export const style = {
  button: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    marginRight: 5,
    marginLeft: 5,
  },
  text: {
    alignSelf: 'center',
  },
};

const Button = (props) => {
  const {
    text,
  } = props;

  return (
    <TouchableOpacity onPress={() => alert('hi')} style={style.button}>
      <Text style={style.text}>
        {text}sdd
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
};

export default Button;

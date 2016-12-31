import React from 'react';
import { View } from 'react-native';

const LoginCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 220,
    alignItems: 'center',
    flexDirection: 'column'
  }
};

export { LoginCard };

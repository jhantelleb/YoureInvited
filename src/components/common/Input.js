import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        autocorrect={false}
        autoCapitalize='none'
        selectionColor='#fff'
        clearButtonMode='while-editing'
      />
      </View>
    );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#fff'
  },
  containerStyle: { //View tag
    flex: 2,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.40)'
  }
};
export { Input };

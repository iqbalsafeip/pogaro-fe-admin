import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import colors from '../constants';

const FormInput = ({
  label,
  placeholder,
  passwordInput,
  showPasswordState,
  icon,
  errorMessage,
  onPressIcon,
  value,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
}) => {
  if (passwordInput) {
    return (
      <View style={{marginBottom: 15}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.border,
            }}>
            {label}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.error,
            }}>
            {errorMessage}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.grayBg,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{ flex: 1}}
            value={value}
            onChangeText={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            secureTextEntry={showPasswordState ? false : true}
            keyboardType="default"
            autoCompletetype="off"
            autoCapitalize="none"></TextInput>
          <TouchableOpacity onPress={onPressIcon}>
            <Image
              style={{width: 15, height: 15, tintColor: colors.border}}
              source={icon}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={{marginBottom: 15}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.border,
          }}>
          {label}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.error,
          }}>
          {errorMessage}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.grayBg,
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{ flex: 1}}
          value={value}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          keyboardType="default"
          autoCompletetype="off"
          autoCapitalize="none"></TextInput>
        {errorMessage.length > 0 ? (
          <View
            style={{
              width: 15,
              height: 15,
              borderWidth: 2,
              borderTopLeftRadius: 15 / 2,
              borderTopRightRadius: 15 / 2,
              borderBottomLeftRadius: 15 / 2,
              borderBottomRightRadius: 15 / 2,
              borderColor: colors.error,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 15,
                height: 15,
                tintColor: colors.error,
              }}
              source={icon}></Image>
          </View>
        ) : (
          <Image
            style={{
              width: 15,
              height: 15,
              tintColor: colors.greenPrimary,
            }}
            source={icon}></Image>
        )}
      </View>
    </View>
  );
};

export default FormInput;
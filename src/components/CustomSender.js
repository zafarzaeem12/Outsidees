import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import React from 'react';
import {Colors} from '../config';
import Icons from '../assets/Icons';
import RNBounceable from "@freakycoder/react-native-bounceable";

const CustomSender = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width + 15,
        paddingVertical: 10,
        flexDirection: 'row',
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
        backgroundColor: Colors.purple,
        // elevation: 12,
        shadowOpacity: 2,
        alignItems:'center',
       
        
      }}>
      <TextInput
        placeholder="Type Message here"
        placeholderTextColor={Colors.grey}
        style={{
          flex: 8,
          paddingLeft: '6%',
          maxWidth: 360,
          color: Colors.white,
        }}
      />
      <RNBounceable
        style={{
          flex: 2,
          flexDirection:'row',
          right:10
        }}>
       <Image  source={Icons.attachment} resizeMode="center" style={{width:30,height:30,marginHorizontal:20}} />

      </RNBounceable>
      <RNBounceable
        style={{
          flex: 2,
          flexDirection:'row',
          right:20
        }}>
       <Image  source={Icons.send} resizeMode="center" style={{width:30,height:30,marginHorizontal:20}} />

      </RNBounceable>
    </View>
  );
};

export default CustomSender;

const styles = StyleSheet.create({});

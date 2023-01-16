import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, NavService} from '../config';
import Icons from '../assets/Icons';
import {useState} from 'react';

const Heading = props => {
  const {name, switchs, icon, tintclr, onpress} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: Colors.grey,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={props?.icon}
        resizeMode="center"
        style={{
          width: 35,
          height: 35,
          tintColor: tintclr ? Colors.purple : null,
        }}
      />
      <TouchableOpacity onPress={() => NavService.navigate(props?.onpress)}>
        <Text
          style={{
            marginLeft: 10,
            fontWeight: '600',
            fontSize: 18,
            color: Colors.black,
          }}>
          {props?.name}
        </Text>
      </TouchableOpacity>
      {switchs ? (
        <View style={{position: 'absolute', right: 5}}>
          <Switch
            trackColor={{false: Colors.darkGray, true: Colors.green}}
            thumbColor={isEnabled ? Colors.white : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});

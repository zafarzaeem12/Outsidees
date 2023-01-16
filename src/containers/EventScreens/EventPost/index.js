import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import Icons from '../../../assets/Icons';
import {Colors, NavService} from '../../../config';
import {Picker} from '@react-native-picker/picker';
import CustomImagePicker from '../../../components/CustomImagePicker';
import CustomButton from '../../../components/CustomButton';
import RNBounceable from "@freakycoder/react-native-bounceable";
const EventPost = () => {
  const {title, setTitle} = useState();
  const {dec, setDec} = useState();
  const {location, setLocation} = useState();

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <AppBackground title={'Events'} home back>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            borderWidth: 2,
            borderColor: Colors.purple,
            alignSelf: 'center',
            height: 180,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <CustomImagePicker>
            <RNBounceable style={{}}>
              <Image
                source={Icons.upload}
                resizeMode="center"
                style={{width: 40, height: 40, marginLeft: 10}}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 16,
                  color: Colors.darkGray,
                }}>
                Upload
              </Text>
            </RNBounceable>
          </CustomImagePicker>
        </View>
        <TextInput
          style={{
            backgroundColor: '#ededed',
            marginTop: 10,
            width: '98%',
            paddingLeft: 15,
            borderRadius: 10,
          }}
          value={title}
          placeholder="Title"
        />

        <Picker
          style={{
            backgroundColor: '#ededed',
            marginTop: 10,
            width: '98%',
            paddingLeft: 15,
            borderRadius: 10,
          }}
          color={Colors.grey}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Type" value="Type" color={'#A9A9A9'} />
          <Picker.Item label="event" value="event" color={'#A9A9A9'} />
        </Picker>
        <View
          style={{
            backgroundColor: '#ededed',
            marginTop: 10,
            width: '98%',
            paddingLeft: 15,
            borderRadius: 10,
            flexDirection:'row',
            alignItems:'center',
          }}>
          <TextInput value={location} placeholder="Location" style={{width:'90%'}}/>
          <Image source={Icons.marker} style={{width:15,height:18,position:'absolute',right:10,tintColor:'#434343'}}/>
        </View>
        <View
          style={{
            height: 150,
            backgroundColor: '#ededed',
            width: '98%',
            borderRadius: 10,
            marginTop:10
          }}>
          <TextInput
            placeholder="Description"
            multiline={true}
            style={{maxHeight: 150, marginLeft: 10}}
            value={dec}
          />
        </View>
        <Picker
          style={{
            backgroundColor: '#ededed',
            marginTop: 10,
            width: '98%',
            paddingLeft: 15,
            borderRadius: 10,
          }}
          color={Colors.grey}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item
            label="Event Type (i.e Recurring)"
            value="Event Type (i.e Recurring)"
            color={'#A9A9A9'}
          />
          <Picker.Item label="event" value="event" color={'#A9A9A9'} />
        </Picker>
        <CustomButton
          buttonStyle={{
            marginTop: 10,
            alignSelf: 'center',
          }}
          title="Post"
          onPress={() => NavService.goBack()}
          // onPress={() => NavService.reset(0, [{name: 'CompleteProfile'}])}
        />
      </ScrollView>
    </AppBackground>
  );
};

export default EventPost;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import Mainprofile from '../../../components/Mainprofile';
import CustomButton from '../../../components/CustomButton';
import {NavService, Colors} from '../../../config';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CustomImagePicker from '../../../components/CustomImagePicker';
import Icons from '../../../assets/Icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
const Post = () => {
  const {tags, setTags} = useState();
  const {review, setReview} = useState();

  return (
    <AppBackground title={'Post'} home back>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 30}}>
        <Mainprofile center top name="Alan Smith" star />
        <Text
          style={{
            marginHorizontal: 10,
            textAlign: 'center',
            marginVertical: 10,
            fontWeight: 'bold',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Ipsum is simply dummy text of the printing
        </Text>
        <View
          style={{
            width: '90%',
            borderWidth: 2,
            borderColor: Colors.purple,
            alignSelf: 'center',
            height: 150,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
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
            backgroundColor: Colors.background,
            marginVertical: 10,
            width: '92%',
            marginHorizontal: 10,
            paddingLeft: 15,
            borderRadius: 10,
          }}
          value={tags}
          placeholder="Tags"
          // placeholderTextColor={Colors.offWhite}
        />
        <View
          style={{
            height: 150,
            backgroundColor: Colors.background,
            width: '92%',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Review"
            multiline={true}
            style={{maxHeight: 150, marginLeft: 10}}
            value={review}
          />
        </View>

        <CustomButton
          title={'Post'}
          buttonStyle={{alignSelf: 'center'}}
          onPress={() => NavService.navigate('Review')}
        />
      </ScrollView>
    </AppBackground>
  );
};

export default Post;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});

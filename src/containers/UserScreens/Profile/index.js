import moment from 'moment';
import React, {Component, useRef, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {Colors, NavService} from '../../../config';
import CustomButton from '../../../components/CustomButton';
import Mainprofile from '../../../components/Mainprofile';
import Posts from '../../../components/Posts';
const {width, height} = Dimensions.get('window');

export default Profile = props => {
  return (
    <AppBackground title={'User Profile'} home setting>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 5}}>
        <View style={{marginTop: 10}}>
          <Mainprofile
            center
            row
            name="John Smith"
            subtitle="johnsmith@gmail.com"
            edit
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              color: Colors.black,
              fontWeight: '600',
              marginLeft:10
            }}>
            Post History
          </Text>
          <Posts />
          <Posts />

        </View>
      </ScrollView>
    </AppBackground>
  );
};

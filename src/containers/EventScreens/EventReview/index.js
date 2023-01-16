import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import AppBackground from '../../../components/AppBackground';
import Images from '../../../assets/Images';
import Posts from '../../../components/Posts';
import {Colors} from '../../../config';
import Icons from '../../../assets/Icons';
const EventReview = () => {
  return (
    <AppBackground back home>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:25}}>
        <Image
          source={Images.background3}
          resizeMode="contain"
          style={{width: '100%', height: 180}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 18}}>
            Event Name .
          </Text>
          <Text style={{fontSize: 16}}> 25-12-2002</Text>
        </View>
        <Text style={{fontWeight: '600'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Icons.marker}
            style={{width: 20, height: 30}}
            resizeMode="center"
          />
          <Text style={{color: Colors.black, fontWeight: '700'}}>
            {' '}
            909 berkeley Ave, Trenton
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 18,
            color: Colors.black,
            fontWeight: 'bold',
            marginLeft: 5,
          }}>
          Ratings & Posts
        </Text>
        <Posts />
        <Posts />

      </ScrollView>
    </AppBackground>
  );
};

export default EventReview;

const styles = StyleSheet.create({});

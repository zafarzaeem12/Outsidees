import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import AppBackground from '../../../components/AppBackground';
import {Colors, NavService} from '../../../config';
import Posts from '../../../components/Posts';
import CustomButton from '../../../components/CustomButton';
import Swiper from 'react-native-swiper';
import Images from '../../../assets/Images';
import Mainprofile from '../../../components/Mainprofile';
import RNBounceable from '@freakycoder/react-native-bounceable';

const Review = () => {
  return (
    <AppBackground title={'Events'} home back chat>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 30}}>
        <Swiper
          style={{height: 200, borderRadius: 15}}
          showsButtons={false}
          buttonWrapperStyle={{Color: '#fff'}}>
          <View style={styles.slide1}>
            <Image
              source={Images.background2}
              style={{borderRadius: 20, width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={Images.background3}
              style={{borderRadius: 20, width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={Images.background1}
              style={{borderRadius: 20, width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
        <View style={{marginTop: 10}}>
          <Mainprofile
            center
            name="John Smith"
            subtitle="Event Owner"
            row
            inc
            size
          />
        </View>
        <Text
          style={{
            color: Colors.black,
            marginLeft: 3,
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20,
          }}>
          Ratings & Posts
        </Text>
        <Posts />
        <Posts />
      </ScrollView>
      <CustomButton
        buttonStyle={{alignSelf: 'center'}}
        title="Rate & Post"
        onPress={() => NavService.navigate('Post')}
      />
    </AppBackground>
  );
};

export default Review;

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  cardContent: {
    color: Colors.black,
    fontSize: 34,
    fontWeight: '500',
  },
  slide1: {
    height: 200,
    borderRadius: 15,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

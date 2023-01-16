import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBackground from '../../../components/AppBackground';
import {Featureddata} from '../../../config/Dummydata/Dummydata';
import {Colors, NavService} from '../../../config';
import RNBounceable from "@freakycoder/react-native-bounceable";
const Featured = () => {
  return (
    <AppBackground title={'Featured'} home back>
      <FlatList
        data={Featureddata}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginTop: 30,marginHorizontal:8}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 16, color: Colors.black, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 5,
                }}>
                <Image source={item.rating} style={{width: 18, height: 18}} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                    color: Colors.black,
                    fontWeight: '700',
                  }}>
                  {item.review}
                </Text>
              </View>
            </View>
            <RNBounceable onPress={() => NavService.navigate(item.onPress)}>
              <ImageBackground
                source={item.background}
                style={{width: '100%', height: 150, marginTop: 10}}
                imageStyle={{borderRadius: 10}}>
                <Image
                  source={item.empty}
                  resizeMode="center"
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 15,
                    top: 8,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 8,
                    left: 5,
                  }}>
                  <Image
                    source={item.location}
                    resizeMode="center"
                    style={{tintColor: Colors.white, width: 18, height: 18}}
                  />
                  <Text style={{color: Colors.white, fontWeight: 'bold'}}>
                    {' '}
                    {item.loc}
                  </Text>
                </View>
              </ImageBackground>
            </RNBounceable>
          </View>
        )}
      />
    </AppBackground>
  );
};

export default Featured;

const styles = StyleSheet.create({});

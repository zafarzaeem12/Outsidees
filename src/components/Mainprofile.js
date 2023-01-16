import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../assets/Images';
import {Colors, NavService} from '../config';
import Icons from '../assets/Icons';
import StarRating from 'react-native-star-rating';

import RNBounceable from '@freakycoder/react-native-bounceable';

const Mainprofile = props => {
  const [starCount, setStarCount] = React.useState(1);

  const {name, subtitle, center, row, top, star, edit, inc, size, txt} = props;
  return (
    <View
      style={{
        alignItems: center ? 'center' : null,
        flexDirection: row ? 'row' : null,
        marginLeft: 5,
        marginTop:25,
      }}>
      {top ? (
        <Image
          source={Images.avatar}
          resizeMode="contain"
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: Colors.purple,
          }}
        />
      ) : (
        <View>
          <Image
            source={Images.avatar}
            resizeMode="contain"
            style={{
              width: inc ? 50 : 80,
              height: inc ? 50 : 80,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: Colors.purple,
            }}
          />
          {edit ? (
            <RNBounceable
              onPress={() => NavService.navigate('EditProfile')}
              style={{
                backgroundColor: Colors.purple,
                padding: 8,
                alignItems: 'center',
                borderRadius: 40,
                width: 30,
                height: 30,
                position: 'absolute',
                bottom: -0,
                right: 0,
              }}>
              <Image
                source={Icons.edit}
                style={{width: 15, height: 15}}
                resizeMode="center"
              />
            </RNBounceable>
          ) : null}
        </View>
      )}
      <View
        style={{
          marginLeft: row ? 10 : null,
          marginTop: top ? 10 : null,
        }}>
        <Text
          style={{
            textAlign: txt ? 'center' : null,
            fontSize: txt ? 18 : 16,
            fontWeight: '700',
            color: Colors.black,
          }}>
          {props?.name}
        </Text>
        {star ? (
          <StarRating
            fullStar={Icons.starFilled}
            // halfStar={Icons.star_half}
            emptyStar={Icons.starEmpty}
            starSize={14}
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => setStarCount(rating)}
          />
        ) : (
          <Text
            style={{
              fontSize: size ? 14 : 18,
              color:Colors.black,
            }}>
            {props?.subtitle}
          </Text>
        )}
      </View>
      {inc ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: 4,
          }}>
          <Image
            source={Icons.marker}
            resizeMode="center"
            style={{width: 25, height: 25}}
          />
          <Text style={{fontSize: 10, color: Colors.black}}>
            909 berkeley Ave,Trenton
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Mainprofile;

const styles = StyleSheet.create({});

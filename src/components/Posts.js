import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Post} from '../config/Dummydata/Dummydata';
import {Colors} from '../config';
import StarRating from 'react-native-star-rating';
import Icons from '../assets/Icons';
const Posts = () => {
  const [starCount, setStarCount] = React.useState(1);

  return (
    <FlatList
      data={Post}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      renderItem={({item, index}) => (
        <>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: Colors.grey,
              marginTop: 10,
              marginHorizontal:8
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

              }}>
              <Image
                source={item.avatar}
                style={{
                  backgroundColor: 'blue',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginTop: 8,
                }}
                resizeMode="center"
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '600',
                  }}>
                  {item.title}
                </Text>
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
              </View>
              <Text
                style={{
                  position: 'absolute',
                  right: 0,
                  color: Colors.black,
                  fontWeight: '600',
                }}>
                {item.time}
              </Text>
            </View>
            <Image
              source={item.flower}
              resizeMode="stretch"
              style={{
                width: '100%',
                borderRadius: 20,
                marginTop: 10,
                height: 150,
              }}
            />
            <Text
              style={{
                marginTop: 2,
                marginLeft: 5,
                fontWeight: '600',
              }}>
              {item.description}
            </Text>
            <Text
              style={{
                fontWeight: '700',
                color: '#000',
                marginLeft: 5,
              }}>
              {item.link}
            </Text>
          </View>
        </>
      )}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({});

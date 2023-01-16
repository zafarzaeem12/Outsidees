import React, {useRef, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import Images from '../assets/Images';
import {Colors, NavService} from '../config';
import CustomBackground from './CustomBackground';
import RNBounceable from '@freakycoder/react-native-bounceable';
const FadeInView = props => {
  const anim = new Animated.Value(0);
  const duration = 2000;

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 15,
        duration: duration,
        useNativeDriver: true,
      }),
    ).start();
    setTimeout(
      () =>
       anim.stopAnimation(({ Value }) =>
          console.log("Final Value: " + Value)
        ),
      2000
    );
  }, []);
  return (
    <View style={{
    }}>

    <Animated.View
      style={{
       
        ...props.style,
        transform: [{translateY: anim}],
      }}>
      {props.children}
    </Animated.View>
    </View>
  );
};
export function AppBackground({
  editeIcon,
  route,
  children,
  title,
  back = false,
  nav = '',
  rightIcon = Images.avatar,
  marginHorizontal,
  rightIconNav = () => {},
  profile = false,
  edit = false,
  notification = false,
  gear = false,
  filter = false,
  chat = false,
  setting = false,
  home,
}) {
  const onPress = () => {
    nav.length
      ? NavService.navigate(nav)
      : back
      ? NavService.goBack()
      : NavService.navigate;
  };
  //  console.log("==========="+ route.name)
  return home ? (
    <View style={{flex: 1, backgroundColor: Colors.offWhite}}>
      <FadeInView
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
              position: 'absolute',
              alignItems: 'center',
              // backgroundColor: Colors.white,
              borderRadius: 10,
              left: 25,
              // width: 35,
              // height: 35,
              justifyContent: 'center',
              top: 3,
            }}>
            <Image
              source={back ? Icons.back : null}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.purple,
                // tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {profile && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('EventProfile');
              }}
              style={{
                right: 25,
                position: 'absolute',
              }}>
              <Image
                source={Images.avatar}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 15,
                  resizeMode: 'center',
                }}
              />
            </TouchableOpacity>
          )}
          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {
              //   NavService.navigate('Notification');
              // }}
              style={{
                position: 'absolute',
                right: 28,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: Colors.white,
              }}>
              <Image
                source={Icons.notification}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {gear && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('EventSetting');
              }}
              style={{
                position: 'absolute',
                right: 30,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: Colors.white,
              }}>
              <Image
                source={Icons.settings}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: Colors.purple,
                }}
              />
            </RNBounceable>
          )}
          {setting && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Setting');
              }}
              style={{
                position: 'absolute',
                right: 30,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: Colors.white,
              }}>
              <Image
                source={Icons.settings}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: Colors.purple,
                }}
              />
            </RNBounceable>
          )}
          {filter && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={() => {
                // NavService.navigate('Setting')
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: Colors.white,
              }}>
              <Image
                source={Icons.filter}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: Colors.purple,
                }}
              />
            </RNBounceable>
          )}
          {chat && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('ChatList');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: Colors.white,
              }}>
              <Image
                source={Icons.msg}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: Colors.purple,
                }}
              />
            </RNBounceable>
          )}
        </>
      </FadeInView>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  ) : (
    <ImageBackground source={Images.bg} style={{flex: 1}}>
      <FadeInView
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <>
          {back && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={onPress}
              style={{
                position: 'absolute',
                alignItems: 'center',
                // backgroundColor: Colors.white,
                borderRadius: 10,
                left: 10,
                // width: 35,
                // height: 35,
                padding: 5,
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.back}
                style={{
                  width: 16,
                  height: 16,
                  resizeMode: 'contain',
                  tintColor: Colors.white,
                }}
              />
            </RNBounceable>
          )}
          <View>
            <Text
              style={{
                color: Colors.white,
                fontWeight: '600',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {profile && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Profile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: Colors.darkGray,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
              />
            </RNBounceable>
          )}
          {edit && (
            <RNBounceable
              activeOpacity={0.8}
              onPress={rightIconNav}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: Colors.darkGray,
              }}>
              <Image
                source={editeIcon}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </RNBounceable>
          )}
        </>
      </FadeInView>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </ImageBackground>
  );
}

export default AppBackground;

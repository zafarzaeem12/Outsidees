import React, {Component,useEffect} from 'react';
import {View, Text, TouchableOpacity, Image,Animated} from 'react-native';
import {Colors, NavService} from '../../../config';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Icons from '../../../assets/Icons';
import AppBackground from '../../../components/AppBackground';
import {ProfileTextInput} from '../../../components/CustomTextInput';
const FadeInView = props => {
  const anim = new Animated.Value(0);
  const duration = 2000;

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: -15,
        duration: duration,
        useNativeDriver: true,
      }),
    ).start();
    setTimeout(
      () =>
        anim.stopAnimation(({Value}) => console.log('Final Value: ' + Value)),
      2000,
    );
  }, []);
  return (
    <View style={{}}>
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

class Login extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    visible1: false,
    visible2: false,
  };

  render() {
    const {email, password, confirmPassword, fullname} = this.state;
    return (
      <AppBackground back profile={false} title={'Sign Up'}>
        <CustomBackground>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              width: '100%',
              
            }}>
            <FadeInView
              style={{
                alignItems: 'center',
              width: '90%',
              backgroundColor:'rgba(118,158,190,300)',
            borderRadius:20,
            borderWidth:1.5,
            borderColor:Colors.white,
            paddingHorizontal:10,
            paddingVertical:15
              }}>
              <ProfileTextInput
                heading="Full Name"
                icon={Icons.user}
                value={fullname}
                onChangeText={text => this.setState({name: text})}
                label={'User Name'}
              />
              <ProfileTextInput
                heading="Email Address"
                icon={Icons.email}
                value={email}
                onChangeText={text => this.setState({email: text})}
                label={'Email Address'}
              />
              <ProfileTextInput
                heading="Password"
                icon={Icons.password}
                value={password}
                onChangeText={text => this.setState({password: text})}
                secureTextEntry={this.state.visible1 ? false : true}
                label={'Password'}
              />
              {/* {!this.state.visible1 ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      visible1: !this.state.visible1,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 215,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.unVisible}
                    style={{
                      height: 26,
                      width: 26,
                      tintColor: Colors.darkGray,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      visible1: !this.state.visible1,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 215,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.visible}
                    style={{
                      height: 26,
                      width: 26,
                      tintColor: Colors.darkGray,
                    }}
                  />
                </TouchableOpacity>
              )} */}
              <ProfileTextInput
                heading="Confirm Password"
                icon={Icons.password}
                value={confirmPassword}
                onChangeText={text => this.setState({confirmPassword: text})}
                label={'Confirm Password'}
                secureTextEntry={this.state.visible2 ? false : true}
              />
              {/* {!this.state.visible2 ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      visible2: !this.state.visible2,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 300,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.unVisible}
                    style={{
                      height: 26,
                      width: 26,
                      tintColor: Colors.darkGray,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      visible2: !this.state.visible2,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 300,
                    right: 30,
                  }}>
                  <Image
                    source={Icons.visible}
                    style={{
                      height: 26,
                      width: 26,
                      tintColor: Colors.darkGray,
                    }}
                  />
                </TouchableOpacity>
              )} */}

              <CustomButton
                title="Signup"
                // onPress={() => NavService.navigate('CompleteProfile')}
              onPress={() => NavService.reset(0, [{name: 'CompleteProfile'}])}

                buttonStyle={{
                  marginTop: 15,
                }}
              />
            </FadeInView>
           
          </View>
          <View style={{marginTop:50}}>

          <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: Colors.white,
                position:'absolute',
                bottom:10,
                alignSelf:'center'

              }}>
              Already have an account?{' '}
              <Text
                onPress={() => NavService.navigate('Login')}
                style={{
                  fontWeight: '600',
                  color: Colors.white,
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </Text>
          </View>
        </CustomBackground>
      </AppBackground>
    );
  }
}

export default Login;

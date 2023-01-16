import React, {Component,useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity,Animated} from 'react-native';
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

class App extends Component {
  state = {
    password: '',
    confirmPassword: '',
    visible1: false,
    visible2: false,
  };

  render() {
    const {password, confirmPassword} = this.state;

    return (
      <AppBackground back profile={false} title={'Reset Password'}>
        <CustomBackground>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              width: '90%',
              top: -15,
            }}>
            <FadeInView
              style={{
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: '5%',
                backgroundColor: 'rgba(118,158,190,300)',
                paddingVertical: '8%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.white,
              }}>
              <ProfileTextInput
                heading="New Password"
                value={password}
                onChangeText={text => this.setState({password: text})}
                icon={Icons.lock}
                secureTextEntry={this.state.visible1 ? false : true}
                label={'New Password'}
              />
              <ProfileTextInput
                heading="Confirm Password"
                value={confirmPassword}
                onChangeText={text => this.setState({confirmPassword: text})}
                icon={Icons.password}
                label={'Confirm Password'}
                secureTextEntry={this.state.visible2 ? false : true}
              />

              <CustomButton
                buttonStyle={{
                  marginTop: '10%',
                }}
                title="CONTINUE"
                onPress={() => NavService.navigate('Login')}
              />
            </FadeInView>
          </View>
        </CustomBackground>
      </AppBackground>
    );
  }
}

export default App;

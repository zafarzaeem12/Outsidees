import React, {Component,useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image,Animated} from 'react-native';
import {Colors, NavService} from '../../../config';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Icons from '../../../assets/Icons';
import OTPTextInput from 'react-native-otp-textinput';
import AppBackground from '../../../components/AppBackground';
import Images from '../../../assets/Images';
// import {login} from '../../redux/actions';
// import {connect} from 'react-redux';
// import {resendVerifyCode, verifyCode} from '../../redux/APIs';
const FadeInView = props => {
  const anim = new Animated.Value(0);
  const duration = 3000;

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: -10,
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

class OTP extends Component {
  state = {
    code: '',
    timerCode: 60,
    resend: false,
    otpInput: null,
  };
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    this.startInterval();
  }
  startInterval = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const {timerCode} = this.state;
      if (timerCode < 1) {
        clearInterval(this.timer);
        this.setState({resend: true});
      } else this.setState({timerCode: timerCode - 1});
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {timerCode, resend, code} = this.state;
    const {user_id} = this.props.route.params;
    return (
      <AppBackground back profile={false} title={'Verification'}>
        <CustomBackground>
          {/* <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{flexGrow: 1}}
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
            }}> */}
            <FadeInView
              style={{
                paddingHorizontal:10,
              backgroundColor:'rgba(118,158,190,300)',
              alignItems:'center',
              borderRadius:10,
              borderWidth:1,
              borderColor:Colors.white
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.white,
                  fontSize: 16,
                  marginVertical: 20,
                }}>
                Enter verification code
              </Text>
              <OTPTextInput
                tintColor={Colors.grey}
                inputCount={4}
                // onCodeChanged = { (code) => console.log("new code" + code)}1231
                onCodeFilled={code => {
                  NavService.navigate('ResetPassword');
                  // onPress={async () => NavService.navigate('ResetPassword')}
                }}
                ref={e => (this.code = e)}
                textInputStyle={{
                  borderBottomWidth: 1,
                  color: Colors.grey,
                  backgroundColor: Colors.white,
                }}
                containerStyle={{
                  height: 80,
                }}
              />
              <View style={{
                alignItems:'center'
              }}>

                 <Image source={Icons.clock} resizeMode="center" style={{width:60,height:60,tintColor:'white'}} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop:10
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      alignSelf: 'center',
                      fontWeight: '800',
                      fontSize:20
                    }}>
                    00:{timerCode}
                  </Text>
              <CustomButton
              buttonStyle={{
                marginVertical: '8%',
              }}
              title="Verify"
              onPress={async () => NavService.navigate('ResetPassword')}
            />
                </View>
              </View>
            </FadeInView>

            {/* <Text
              onPress={
                resend
                  ? async () => {
                      // await resendVerifyCode(user_id);
                      this.setState({timerCode: 60, resend: false, code: ''});
                      this.startInterval();
                    }
                  : null
              }
              style={{
                // marginTop: 100,
                color: '#fff',
                fontWeight: resend ? '600' : '300',
                alignSelf: 'center',
                fontSize: 14,
                top:5
             
              }}>
              Didn't Receive Code ? Resend
            </Text> */}
          {/* </ScrollView> */}
        </CustomBackground>
      </AppBackground>
    );
  }
}

export default OTP;

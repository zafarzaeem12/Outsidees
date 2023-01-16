import React, {Component,useEffect} from 'react';
import {View, Text,  Image,TouchableOpacity, Dimensions, Animated,} from 'react-native';
import {Colors, NavService} from '../../../config';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Icons from '../../../assets/Icons';
import AppBackground from '../../../components/AppBackground';
import Images from '../../../assets/Images';
import LinearGradient from 'react-native-linear-gradient';
import { ProfileTextInput } from '../../../components/CustomTextInput';


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

class Login extends Component {
  state = {
    email: '',
    password: '',
    visible: false
  };
    render() {
    const {email, password} = this.state;
    return (
      <AppBackground profile={false} back={true} title={"Login"} >
        <CustomBackground>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '90%',
            top:-15,
          }}>
          
  
          <FadeInView
            style={{
              alignItems: 'center',
              width: '95%',
              backgroundColor:'rgba(118,158,190,300)',
            borderRadius:20,
            borderWidth:1.5,
            borderColor:Colors.white,
            paddingHorizontal:10,
            paddingVertical:15

            }}>
            <ProfileTextInput
            heading="Email Address"
              value={email}
              onChangeText={text => this.setState({email: text})}
              label={'Email'}
              icon={Icons.email}
            />

            <ProfileTextInput
            heading="Password"
              value={password}
              onChangeText={text => this.setState({password: text})}
              icon={Icons.password}

              secureTextEntry={
                this.state.visible ? false : true
              }
              label={'Password'}
            />
            {/* {
              !this.state.visible ? (
                <TouchableOpacity onPress={()=>{
                  this.setState({
                    visible: !this.state.visible
                  })
                  
                }} style={{
                  position:"absolute",
                 alignSelf:"flex-end",
                 top: 155,
                 right:40
                   }} >
                  <Image source={Icons.unVisible} style={{
                    height:22,
                       width:22,
                       tintColor: Colors.darkGray

                       }} />
               </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={()=>{
                  this.setState({
                    visible: !this.state.visible
                  })
                }} style={{
                  position:"absolute",
                 alignSelf:"flex-end",
                 top: 155,
                 right:40
    }} >
<Image source={Icons.visible} style={{
      height:22,
      width:22,
      tintColor: Colors.darkGray
    }} />
</TouchableOpacity>
              )
            } */}
            <TouchableOpacity
            onPress={()=>{
              NavService.navigate("ForgetPassword");
            }}
            style={{
              alignSelf:"center",
              marginTop:20
            }} >
              <Text style={{
                fontSize: 16,
                color: Colors.black,
              
            textDecorationLine:'underline',
              
              }} >Forgot Password?</Text>
            </TouchableOpacity>
            <CustomButton
              buttonStyle={{
                marginTop: '10%',
              }}
              title="Login"
              // onPress={() => NavService.reset(0, [{name: 'ScreenStack'}])}
              onPress={() => NavService.reset(0, [{name: 'CompleteProfile'}])}

            />
          </FadeInView>
        </View>
        <View style={{
            // top: Dimensions.get("window").height / 1
            position:'absolute',
            bottom:2,
            alignSelf:'center'
          }} >
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: Colors.white,
            }}>
            Don't have an account?{' '}
            <Text
              onPress={() => NavService.navigate('Signup')}
              style={{
                fontWeight: '600',
                color: Colors.white,
                fontSize: 15,
                textDecorationLine: 'underline',
              }}>
              Signup 
            </Text>
          </Text>
          </View>
        </CustomBackground>
     </AppBackground> 
    );
  }
}

export default Login;

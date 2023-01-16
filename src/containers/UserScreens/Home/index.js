import moment from 'moment';
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import AppBackground from '../../../components/AppBackground';
import {Colors, NavService, Shadows} from '../../../config';
import {connect} from 'react-redux';
import {Evntdata, Maindata} from '../../../config/Dummydata/Dummydata';
import CustomButton from '../../../components/CustomButton';
import Btn from '../../../components/Btn';
import Pickdate from '../../../components/Pickdate';
const {width} = Dimensions.get('window');
import RNBounceable from '@freakycoder/react-native-bounceable';
import SplashScreen from 'react-native-splash-screen';

export class Home extends Component {
  state = {
    popUp: true,
    location: false,
    date: false,
  };
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    const {popUp, location, date} = this.state;
    const userImage = this.props?.user?.image;
    const togglePopUp = () => {
      this.setState(previousState => ({popUp: !previousState?.popUp}));
    };
    return (
      <AppBackground notification marginHorizontal title={'Home'} home>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.black,
              marginLeft: 25,
            }}>
            Featured
          </Text>
          <View
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              alignSelf: 'center',
              height: 170,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={Evntdata}
              horizontal
              renderItem={({item, index}) => (
                <RNBounceable
                  onPress={() => NavService.navigate('Featured')}
                  style={{
                    marginHorizontal: 5,
                  }}>
                  <ImageBackground
                    source={item.bg}
                    style={{
                      width: 330 / 3,
                      height: 150,
                      marginTop: 10,
                      borderRadius: 10,
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}
                    imageStyle={{borderRadius: 10}}>
                    <Image
                      source={item.empty}
                      resizeMode="center"
                      style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        right: 10,
                        top: 5,
                      }}
                    />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        alignSelf: 'center',
                        color: Colors.white,
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item.name}
                    </Text>
                  </ImageBackground>
                </RNBounceable>
              )}
            />
          </View>
          <FlatList
            scrollEnabled={false}
            data={Maindata}
            renderItem={({item, index}) => (
              <RNBounceable
                onPress={() => NavService.navigate('Event')}
                activeOpacity={0.3}
                style={{
                  marginTop: 10,
                  marginHorizontal: 28,
                }}>
                <ImageBackground
                  source={item.background}
                  style={{
                    height: 160,
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: {height: 3, width: 3},
                    shadowOpacity: 0.8,
                    shadowRadius: 0.5,
                  }}
                  imageStyle={{borderRadius: 10}}>
                  <Image
                    source={item.privacypolicy}
                    resizeMode="center"
                    style={{
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      right: 15,
                      top: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.white,
                      position: 'absolute',
                      bottom: 5,
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {item.name}
                  </Text>
                </ImageBackground>
              </RNBounceable>
            )}
          />
        </ScrollView>
        <Modal
          isVisible={popUp}
          style={{margin: 0, padding: 0}}
          backdropOpacity={0.7}
          // onBackButtonPress={() => togglePopUp()}
        >
          <View
            style={{
              backgroundColor: '#ffffff',
              marginHorizontal: 20,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',

                  marginVertical: 10,
                  marginLeft: 20,
                }}>
                <TextInput
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    width: 250,
                  }}
                  value={location}
                  placeholder="Please enter the location"
                  placeholderTextColor={Colors.black}
                  placeholderTextStyle={{fontSize: 18}}
                />
              </View>
              <Btn />
              <Pickdate />
              <Pickdate />
            </View>
            <CustomButton
              onPress={togglePopUp}
              buttonStyle={{
                marginTop: '5%',
                alignSelf: 'center',
              }}
              title="Continue"
              // onPress={() => NavService.reset(0, [{name: 'ScreenStack'}])}
              // onPress={() => NavService.reset(0, [{name: 'CompleteProfile'}])}
            />
          </View>
        </Modal>
      </AppBackground>
    );
  }
}

const mapStateToProp = ({reducer: {user}}) => {
  return {user};
};

export default connect(mapStateToProp)(Home);

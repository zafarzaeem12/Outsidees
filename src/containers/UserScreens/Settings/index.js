import React, {Component} from 'react';
import {
  Text,
  View,
  Switch,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icons from '../../../assets/Icons';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import {Colors, NavService} from '../../../config';
import Mainprofile from '../../../components/Mainprofile';
import Heading from '../../../components/Heading';
export class TermsConditions extends Component {
  state = {
    notifications: false,
  };
  onNotificationPress = () => {
    const {notifications} = this.state;
    let response;
    this.setState({notifications: !notifications});
  };

  render() {
    const {notifications} = this.state;
    return (
      <AppBackground
        title={'Settings'}
        profile={false}
        notification={false}
        back
        home>
        <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
          <Mainprofile
          txt
            center
            top
            name="John Smith"
            subtitle="johnsmith@gmail.com"
          />
          <View style={{marginTop:30}}>
          <Heading name="Facebook.com" icon={Icons.fbk}/>
          <Heading name="Twitter.com" icon={Icons.twitter} />
          <Heading name="Instagram" icon={Icons.instagram}/>
          <Heading name="Location Tracking" switchs icon={Icons.location} tintclr/>
          <Heading name="Policies" icon={Icons.policies}/>
          <Heading name="Help" icon={Icons.help}/>

          </View>
          <CustomButton
          // onPress={() => NavService.navigate('Auth')}
              buttonStyle={{
                marginTop: '10%',
                width:'95%',
                marginLeft:10
              }}
              title="Logout"
              // onPress={() => NavService.reset(0, [{name: 'ScreenStack'}])}
              onPress={() => NavService.reset(0, [{name: 'Auth'}])}

            />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default TermsConditions;

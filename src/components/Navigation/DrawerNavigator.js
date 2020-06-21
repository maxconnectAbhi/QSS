import React from 'react';
import { createAppContainer, DrawerItems, createDrawerNavigator } from 'react-navigation';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import { Purple, scale, verticalScale } from '../common/Constants';
import { View, StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from 'react-native';
import { UserCotext } from '../../App';

const Items = (props) => (
  <UserCotext.Consumer>
    {(context) => (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor='transparent' />
        <View style={{ alignItems: 'center', justifyContent: "center", marginVertical: verticalScale(20) }}>
          <View style={styles.avatar}>
            <Text style={{ color: '#FFF', fontSize: scale(35) }}>AS</Text>
          </View>
          <Text >Name</Text>
          <Text>Email</Text>
          <Text>Contact</Text>
        </View>
        <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ paddingBottom: 20 }}>
          <DrawerItems
            {...props} />
        </ScrollView>
      </SafeAreaView>
    )}
  </UserCotext.Consumer>
)



const AppNav = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
  }, {
  overlayColor: 'rgba(0,0,5,.6)',
  contentComponent: Items,
  contentOptions: {
    activeTintColor: Purple,
  },
  defaultNavigationOptions: {
    header: null,
  },
}
);

const styles = StyleSheet.create({
  avatar: {
    height: scale(100), width: scale(100), borderRadius: scale(50),
    backgroundColor: Purple,
    justifyContent: 'center', alignItems: 'center'
  }
});


export default createAppContainer(AppNav)
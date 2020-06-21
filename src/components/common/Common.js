import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from "react-native";
import { Card, Rating, Tile } from 'react-native-elements';
import { BLUE, verticalScale, GRAY, scale, Purple, LIGHTGRAY, moderateScale } from './Constants';
import { UserCotext } from '../../App';


export const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../../assets/ic_drawer.png')} resizeMode='contain' style={{ width: verticalScale(30), height: verticalScale(30) }} />
      </TouchableOpacity>
      <View style={styles.row} >
        <Image source={require('../../assets/ic_gry_loc.png')} style={{ height: 15, width: 15 }} resizeMode='contain' />
        <TextInput style={[styles.texInput, { fontSize: 12, marginLeft: 5 }]} placeholder='Search by location'
          placeholderTextColor="#aaa" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity  >
          <Image source={require('../../assets/ic_fiter.png')} resizeMode='contain' style={{ width: verticalScale(20), height: verticalScale(20) }} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={require('../../assets/ic_not.png')} resizeMode='contain' style={{ width: verticalScale(25), height: verticalScale(25), marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const OfferCard = ({ item, navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <Tile imageSrc={item.image} imageContainerStyle={{ width: scale(280), height: verticalScale(200) }}
        containerStyle={styles.tile}
        caption={item.title}
        title={item.rate}
        featured
        captionStyle={styles.description}
        titleStyle={styles.title}
      />
    </View>
  )
}

export const MenuCard = ({ item, navigation }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>
      <Image style={{ height: verticalScale(80), width: verticalScale(80) }} resizeMode='contain'
        source={item.image} />
      <Text numberOfLines={1} style={{ fontSize: moderateScale(12) }}>{item.title}</Text>
    </View>
  )
}

export const ShopCard = ({ item, navigation }) => {
  return (
    <UserCotext.Consumer>
      {(context) =>
          <Card image={item.image} imageStyle={styles.cardImage}
            containerStyle={styles.card1}>
            <Text numberOfLines={1} style={{ fontSize: moderateScale(16) }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../assets/ic_address.png')} style={{ height: 10, width: 10 }} resizeMode='contain' />
              <Text style={{ color: GRAY, fontSize: moderateScale(9) }}>{item.subtitle}</Text>
            </View>
            <Rating imageSize={12} readonly startingValue={5} ratingColor='#fc6504' type='custom' style={{ alignSelf: 'flex-start' }} />
          </Card>
      }
    </UserCotext.Consumer>
  )
}




const styles = StyleSheet.create({
  card: {
    padding: scale(5),
    width: '80%',
    borderRadius: 5,
  },
  card1: {
    margin: scale(9),
    padding: 0,
    marginTop:scale(16),
    width: '45%',
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  card2: {
    margin: 10,
    padding: 0,
    width: verticalScale(60),
    height: verticalScale(60),
    borderRadius: verticalScale(30),
    overflow: 'hidden',
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  cardImage: {
    overflow: 'hidden',
    height: verticalScale(200)
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-evenly',
    marginVertical: verticalScale(10), alignItems: 'center'
  },
  row: {
    flexDirection: 'row', backgroundColor: LIGHTGRAY,
    alignItems: 'center', borderRadius: 15, paddingStart: 10,
    width: '60%', height: verticalScale(40)
  },
  title: {
    fontWeight: 'bold',
    position: 'absolute', bottom: 0, right: 15
  },
  description: {
    fontSize: 18, fontWeight: 'bold',
    position: 'absolute', bottom: 5, left: 15
  },
  texInput: {
    padding: 0,
    width: '65%', alignSelf: 'center',
    marginVertical: verticalScale(7),
    fontSize: scale(16)
  },
  tile: {
    width: '100%',
    backgroundColor: 'gray',
    height: verticalScale(200),
    borderRadius: 20,
    overflow: 'hidden'
  }
})
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import { Heart, Wishlist } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { WishlistData } from './DummyData'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'


const WishlistItem = ({navigation}) => { // Change the parameter to 'props'

  const renderItem = ({ item }) => (
    <View style={styles.Cart}>
      <ImageBackground source={item.Image1} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
        <Image source={Heart} style={styles.Wishlist} />
      </ImageBackground>
      <TouchableOpacity >
        <Text style={styles.Title}>{item.Title}</Text>
        <Text style={styles.MeetingPoint}>{item.MeetingPoint}</Text>
        <View style={{ flexDirection: 'row', marginBottom: "4%" }}>
          <Text style={styles.Price_Txt}>Price</Text>
          <Text style={styles.Total}>{item.Price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.MainCont}>
        <CustomHeader title={'Favorites'} onBackPress={()=>{navigation.goBack()}} />
      <View style={styles.Fav} >
      <FlatList
        data={WishlistData}
        numColumns={2}
        renderItem={renderItem}
      />
      </View>
    </View>
  )
}

export default WishlistItem

const styles = StyleSheet.create({
  MainCont: {
    marginHorizontal: '4%'
  },
  Fav:{
   marginTop:"5%"
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    margin: '2%',
    width: '46%',
    elevation: 2,
    padding: '1%',
  },
  Product_Img: {
    width: '100%', height: 100,
    alignSelf: 'center'
  },
  Wishlist: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    top: '5%',
    right: '5%'
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 18,
    color: Colors.Black,
    marginVertical: '4%',
    marginHorizontal: '4%'
  },
  MeetingPoint: {
    fontSize: 11,
    fontFamily: Fonts.SF_Regular,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',
    marginHorizontal: '4%'
  },
  Price_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Black,
    marginBottom: '2%',
    marginHorizontal: '4%'
  },
  Total: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',
    marginRight: '4%'
  }
})

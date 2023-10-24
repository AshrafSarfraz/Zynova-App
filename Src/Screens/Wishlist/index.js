import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Heart, Wishlist } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { WishlistData } from './DummyData'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'

const WishlistItem = (props,{ navigation }) => {
  // Create an array to store the state for each item
  const [itemStates, setItemStates] = useState(WishlistData.map(() => true));

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <ImageBackground source={item.Image1} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
        {itemStates[index] ? (
          <TouchableOpacity onPress={() => toggleItemState(index)}>
            <Image source={Heart} style={styles.Wishlist} />
          </TouchableOpacity>
        ) :<TouchableOpacity onPress={() => toggleItemState(index)}>
        <Image source={Wishlist} style={styles.Wishlist} />
      </TouchableOpacity> }
      </ImageBackground>
      <TouchableOpacity  onPress={() => { props.navigation.navigate('ProductDetails',{Data:item}) }}  >
        <Text style={styles.Title}>{item.Title}</Text>
        <Text style={styles.MeetingPoint}>{item.MeetingPoint}</Text>
        <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
          <Text style={styles.Price_Txt}>Price :</Text>
          <Text style={styles.Total}>{item.Price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  // Function to toggle the state of a specific item
  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  return (
    <View style={styles.MainCont}>
      <CustomHeader title={'Favorites'} onBackPress={() => {props.navigation.goBack()}} />
      <View style={styles.Fav}>
        <FlatList
          data={WishlistData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export default WishlistItem;

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
    marginBottom:'3%'
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

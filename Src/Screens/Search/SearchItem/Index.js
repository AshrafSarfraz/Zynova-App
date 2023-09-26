import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { SearchItemData } from './DummyData'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import { Heart, Wishlist } from '../../../Themes/Images'

const SearchItem = (props) => { // Change the parameter to 'props'

  const [itemStates, setItemStates] = useState(SearchItemData.map(() => true));

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <ImageBackground source={item.Image1} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
        {itemStates[index] ? (
          <TouchableOpacity onPress={() => toggleItemState(index)}>
            <Image source={Wishlist} style={styles.Wishlist} />
          </TouchableOpacity>
        ) :<TouchableOpacity onPress={() => toggleItemState(index)}>
        <Image source={Heart} style={styles.Wishlist} />
      </TouchableOpacity> }
      </ImageBackground>
      <TouchableOpacity  onPress={() => { props.navigation.navigate('ProductDetails',{Data:item}) }} >
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
      <FlatList
        data={SearchItemData}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor:Colors.Bg
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    margin: '2%',
    marginTop: '0%',
    width: '48%',
    elevation: 2,
    padding: '1%',
    paddingBottom:"0%"
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
    fontSize: 10,
    fontFamily: Fonts.SF_Regular,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',
    marginLeft: '4%',
    marginRight:'1%',
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

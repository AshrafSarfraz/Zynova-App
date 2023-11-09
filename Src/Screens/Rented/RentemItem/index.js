import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../../Themes/Colors'
import { Bobi, Bobi_Logo, Dot, Scan, Wishlist } from '../../../Themes/Images'
import { Fonts } from '../../../Themes/Fonts'
import { BobizzData, RentedItemData } from './DummyData'
import { useRoute } from '@react-navigation/native'
import spacerStyles from '../../../Components/Spacers/style'

const Renteditem = ({ navigation }) => {
  const route = useRoute();
  const [BtnState, setBtnState] = useState(0)
  const [Loading, setLoading] = useState(false)


  useEffect(() => {
    if (route.params && route.params.updateButtonState) {
      setBtnState(1);
    }
  }, [route.params]);


  setTimeout(() => {
    setLoading(true)
  }, 2000);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('BobizzDetail', { Data: item }) }}>
      <View style={styles.Cart}>
        <View style={styles.Item_Detail} >
          <Image source={item.Image1} style={styles.Product_Img} resizeMode='cover' />
          <View style={{ marginLeft: "6%" }} >
            <Text style={styles.Title}>{item.Title}</Text>
            <View style={{ flexDirection: 'row', marginTop: "3%" }}>
              <Text style={styles.Time_Txt}>Pick up:</Text>
              <Text style={styles.Time}>{item.Pick}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: "3%" }}>
              <Text style={styles.Time_Txt}>Return:</Text>
              <Text style={styles.Time}>{item.Return}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ScanImg} >
          <Image source={Scan} style={styles.ScanImg} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
  const renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('RentedDetail', { Data: item }) }}>
      <View style={styles.Cart}>
        <View style={styles.Item_Detail} >
          <Image source={item.Image1} style={styles.Product_Img} resizeMode='cover' />
          <View style={{ marginLeft: "6%" }} >
            <Text style={styles.Title}>{item.Title}</Text>
            <View style={{ flexDirection: 'row', marginTop: "3%" }}>
              <Text style={styles.Time_Txt}>Pick up:</Text>
              <Text style={styles.Time}>{item.Pick}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: "3%" }}>
              <Text style={styles.Time_Txt}>Return:</Text>
              <Text style={styles.Time}>{item.Return}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ScanImg} >
          <Image source={Scan} style={styles.ScanImg} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )





  return (
    <View style={styles.MainCont} >
      {Platform.OS == "ios" ?
        <>
          <View style={spacerStyles.isDefault} />
          <View style={styles.HeaderCont} >
            <View style={styles.LogoCont} >
              <Image source={Bobi_Logo} style={styles.Logo} />
              <Text style={styles.Rented_Item} >Rented items</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('RequestScreen') }} >
              <Image source={Dot} style={{ width: 10, height: 10, alignSelf: "flex-end", top: '12%', right: '0%', zIndex: 1 }} />
              <View style={styles.Req_Btn} >
                <Image style={styles.Btn_Img} source={require('../../../Assets/Images/recieve.png')} />
                <Text style={styles.Request} >Requests</Text>
              </View>
            </TouchableOpacity>
          </View>
        </> :
        <View style={styles.HeaderCont} >
          <View style={styles.LogoCont} >
            <Image source={Bobi_Logo} style={styles.Logo} />
            <Text style={styles.Rented_Item} >Rented items</Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('RequestScreen') }} >
            <Image source={Dot} style={{ width: 10, height: 10, alignSelf: "flex-end", top: '12%', right: '0%', zIndex: 1 }} />
            <View style={styles.Req_Btn} >
              <Image style={styles.Btn_Img} source={require('../../../Assets/Images/recieve.png')} />
              <Text style={styles.Request} >Requests</Text>
            </View>
          </TouchableOpacity>
        </View>
      }

      <View style={styles.SwitchCont} >
        <TouchableOpacity style={[styles.Switch, BtnState === 0 ? styles.ActiveStyle : null]} onPress={() => { setBtnState(0) }} >
          <Text style={[styles.Bobizz_Txt, BtnState === 0 ? styles.ActiveTxt : null]} >My Bobizz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Switch, BtnState === 1 ? styles.ActiveStyle : null]} onPress={() => { setBtnState(1) }} >
          <Text style={[styles.Bobizz_Txt, BtnState === 1 ? styles.ActiveTxt : null]} >Rent Orders</Text>
        </TouchableOpacity>
      </View>


      {BtnState === 0 ?
        <View>
          {Loading === false ?
            <View style={styles.NoFoundCont} >
              <Image source={require('../../../Assets/Images/No.png')} style={styles.NoFoundData_Image} />
              <Text style={styles.NoFoundData} >It seems you haven’t posted anything, Start posting to see stuff here!</Text>
            </View> :

            <FlatList
              data={RentedItemData}
              renderItem={renderItem}
            />

          }
        </View> : null

      }
      {BtnState === 1 ?
        <View>
          {Loading === false ?
            <View style={styles.NoFoundCont} >
              <Image source={require('../../../Assets/Images/No.png')} style={styles.NoFoundData_Image} />
              <Text style={styles.NoFoundData} >It seems you haven’t ordered anything, Start ordering to see stuff here!</Text>
            </View> :

            <FlatList
              data={BobizzData}
              renderItem={renderItem2}
            />

          }
        </View> : null
      }



    </View>
  )
}

export default Renteditem

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: Colors.Bg,
    padding: '3%',
  },
  HeaderCont: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  LogoCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Logo: {
    width: 50, height: 50,
    resizeMode: 'contain',
    marginRight: "3%"
  },
  Rented_Item: {
    fontSize: 20,
    fontFamily: Fonts.SF_SemiBold,
    color: Colors.Green,
    lineHeight: 22,

  },
  Req_Btn: {
    flexDirection: 'row-reverse',
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.Green,
    padding: '2%',
    paddingVertical: '4%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center"

  },
  Btn_Img: {
    width: 20, height: 20,
    marginLeft: "7%"
  },
  Request: {
    fontFamily: Fonts.SF_Regular,
    fontSize: 14,
    color: Colors.Green,
    lineHeight: 15,
  },

  SwitchCont: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
  },
  Switch: {
    width: '50%',
    alignItems: "center",
    padding: '4%',
    borderBottomWidth: 2,
    borderColor: '#35383F',
  },
  Bobizz_Txt: {
    fontFamily: Fonts.SF_SemiBold,
    fontSize: 16,
    color: '#616161',
    lineHeight: 17
  },
  ActiveStyle: {
    borderBottomWidth: 2,
    borderColor: Colors.Green,


  },
  ActiveTxt: {
    color: Colors.Green
  },

  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginTop: "4%",
    width: '100%',

    padding: '2%',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  Item_Detail: {
    flexDirection: "row",
    alignItems: "center",
  },
  ScanImg: {
    width: 25, height: 25,
    bottom: '2%',
    right: '15%'
  },
  Product_Img: {
    width: 100, height: 80,
    borderRadius: 10


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


  },

  Time_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Black,

  },
  Time: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',

  },
  NoFoundCont: {
    height: 520,
    justifyContent: 'center',
    alignItems: "center"
  },
  NoFoundData_Image: {
    width: 250, height: 250,
    resizeMode: "contain"
  },
  NoFoundData: {
    fontSize: 22,
    fontFamily: Fonts.SF_SemiBold,
    marginTop: "15%",
    textAlign: 'center',
    color: Colors.Green,
    width: '90%'
  }






})
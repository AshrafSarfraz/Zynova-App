import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import { Fonts } from '../../../Themes/Fonts'
import { History } from './DummyData'
import spacerStyles from '../../../Components/Spacers/style'

const Balance = ({ navigation }) => {

  const RenderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('Details') }} >
      <View style={styles.Cart} >
        <View style={styles.Img_Detail_Cont} >
          <View style={styles.ImgCont} >
            <Image source={item.Image} style={styles.Img} />
          </View>
          <View style={styles.DetailsCont} >
            <Text style={styles.Title_Txt} >{item.Title}</Text>
            <Text style={styles.Date_Txt} >{item.Date}</Text>
            {item.Payment !== '' ?
              <Text style={styles.Payment_Txt} >{item.Payment}</Text> : null
            }
          </View>
        </View>
        <View style={styles.PriceCont} >
          <Image style={styles.Icon} source={item.Icon} />
          <Text style={styles.PRICE_Txt} >{item.Price}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )






  return (
    <View style={styles.MainCont} >
      {Platform.OS == "ios" ? 
      <>
      <View style={spacerStyles.isDefault} />
      <View style={styles.MainHeader} >
        <CustomHeader title={'Balance'} onBackPress={() => { navigation.goBack() }} />
      </View>
      </>   : 
      <View style={styles.MainHeader} >
        <CustomHeader title={'Balance'} onBackPress={() => { navigation.goBack() }} />
      </View>
      }
      <View style={styles.Body} >
        <View style={styles.BalanceCart} >
          <Text style={styles.Balance_Txt} >Balance</Text>
          <Text style={styles.CHF_Txt} >0 CHF</Text>
          <Text style={styles.Desc_Txt} >You must have more than 10 CHF to withdraw</Text>
        </View>
        <Text style={styles.history} >History</Text>
        <FlatList
          data={History}
          renderItem={RenderItem}
        />
      </View>

      <View style={styles.Footer} >
        <CustomButton title={'Withdraw'} onPress={() => { navigation.navigate('Withdraw') }} />
      </View>
    </View>
  )
}

export default Balance

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    padding: '3%',
    backgroundColor: Colors.Bg
  },
  MainHeader: {
    flex: 0.1,
    justifyContent: 'flex-start'
  },
  Body: {
    flex: 0.8,
  },
  BalanceCart: {
    backgroundColor: Colors.White,
    height: 140,
    elevation: 1,
    borderRadius: 10,
    padding: '4%'
  },
  Balance_Txt: {
    fontSize: 18,
    fontFamily: Fonts.SF_Medium,
    color: Colors.Black,
    marginBottom: 8,
    lineHeight: 22
  },
  CHF_Txt: {
    fontSize: 30,
    fontFamily: Fonts.SF_Bold,
    color: Colors.Green,
    marginBottom: 20,
    lineHeight: 38
  },
  Desc_Txt: {
    fontSize: 14,
    fontFamily: Fonts.SF_Regular,
    color: '#878787',
    marginBottom: 5,
    lineHeight: 18
  },
  history: {
    fontSize: 18,
    fontFamily: Fonts.SF_Medium,
    color: '#000000',
    marginVertical: '5%',
    lineHeight: 22
  },
  Cart: {
    borderColor: Colors.Green,
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3%',
    paddingBottom: '5%',
    marginBottom: '3%',
    height: 75
  },
  Img_Detail_Cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgCont: {
    marginRight: '7%',
  },
  Img: {
    width: 40, height: 40,

  },
  DetailsCont: {

  },
  Title_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_SemiBold,
    color: '#000000',
    marginVertical: '5%',
    lineHeight: 16
  },
  Date_Txt: {
    fontSize: 10,
    fontFamily: Fonts.SF_Regular,
    color: '#878787',
    marginBottom: '0%',
    lineHeight: 16
  },
  Payment_Txt: {
    fontSize: 8,
    fontFamily: Fonts.SF_Bold,
    color: Colors.Green,
    lineHeight: 16
  },
  Icon: {
    width: 20, height: 20,
    alignSelf: 'flex-end'
  },
  PRICE_Txt: {
    fontSize: 16,
    fontFamily: Fonts.SF_Bold,
    color: Colors.Green,
    lineHeight: 20,
    marginTop: '3%'
  },

  Footer: {
    flex: 0.1,
    justifyContent: 'flex-end'
  }
})
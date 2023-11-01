import { View, Text, StyleSheet,ScrollView,Image, Platform } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import Rating from '../../../Components/Rating/Rating'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import spacerStyles from '../../../Components/Spacers/style'

const WhatUserThink = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
      {Platform.OS == "ios" ? 
      <>
      <View style={spacerStyles.isDefault} />
      <CustomHeader title={'What users think about you'} onBackPress={()=>{navigation.goBack()}} />
      </> : 
      <CustomHeader title={'What users think about you'} onBackPress={()=>{navigation.goBack()}} />
    }
    <ScrollView >
    <View style={styles.Cart} >
    <View style={styles.TopReviewCont} >
        <Image source={require('../../../Assets/Images/img2.png')} style={styles.OwnerImg} />
        <View  style={styles.User} >
        <Text style={styles.OwnerName} >Max welicon</Text>
          <Rating/>
        </View>
     </View>
     <Text style={styles.Review_Text} >The product was amazing. Had a nice experience with the owner, would love to recommend all of you!!!</Text>
    </View>
    <View style={styles.Cart} >
    <View style={styles.TopReviewCont} >
        <Image source={require('../../../Assets/Images/TopProfile2.png')} style={styles.OwnerImg} />
        <View  style={styles.User} >
        <Text style={styles.OwnerName} >Max welicon</Text>
          <Rating/>
        </View>
     </View>
     <Text style={styles.Review_Text} >The product was amazing. Had a nice experience with the owner, would love to recommend all of you!!!</Text>
    </View>
    <View style={styles.Cart} >
    <View style={styles.TopReviewCont} >
        <Image source={require('../../../Assets/Images/TopProfile3.png')} style={styles.OwnerImg} />
        <View  style={styles.User} >
        <Text style={styles.OwnerName} >Max welicon</Text>
          <Rating/>
        </View>
     </View>
     <Text style={styles.Review_Text} >The product was amazing. Had a nice experience with the owner, would love to recommend all of you!!!</Text>
    </View>
  </ScrollView>
  </View>
  )
}

export default WhatUserThink

const styles=StyleSheet.create({
  MainCont:{
   backgroundColor:Colors.Bg,
   padding:'3%',
   flex:1
  },
  Cart:{
    backgroundColor:Colors.White,
    padding:'4%',
    borderRadius:10,
    elevation:1,
    width:'100%',
    marginTop:'4%'
  },
  TopReviewCont:{
   flexDirection:'row',
   alignItems:'center',
   borderRadius:15,
   marginBottom:10
  },
  OwnerImg:{
    width:50,height:50,
    marginRight:'3%'
  },
  OwnerName:{
    fontSize:15,
    lineHeight:18,
    color:Colors.Black,
    fontFamily:Fonts.SF_SemiBold,
    marginBottom:'3%',
    
  },
  Review_Text:{
   fontSize:12,
   lineHeight:15,
   color:Colors.Black,
   fontFamily:Fonts.SF_Regular,
  }


})
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../Themes/Colors'
import { Back_Icon, Bobi_Logo, Next, User } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'
import CustomButton from '../../Components/CustomButton/CustomButton'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
    <View style={styles.MainHeader} >
      <Image source={Bobi_Logo} style={styles.Bobi_Logo}/>
      <Text style={styles.Profile_Txt} >Profile</Text>
    </View>
    <View style={styles.Body} >
      <View style={styles.ProfileCart} >
         <View style={styles.ImageCart} >
        <Image source={User} style={styles.UserProfile}  />
         </View>
        <View style={styles.DetailCont} >
         <Text style={styles.UserName} >Luke Skywalker</Text>
         <Text style={styles.RentedItem} >Rented Objects: 0</Text>
         <TouchableOpacity style={styles.Identity_Btn}   onPress={()=>{navigation.navigate('VerifyID')}}>
          <Text style={styles.Identity_Txt} >Verify your Identity</Text>
         </TouchableOpacity>
        </View>
      </View>
      <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >Account</Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('Account')}} >
          <Image source={Next} style={styles.Next_Icon} />
          </TouchableOpacity>
      </View>
      <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >Balance</Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('Balance')}} >
          <Image source={Next} style={styles.Next_Icon} />
          </TouchableOpacity>
      </View>
      <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >What users think about you</Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('WhatUserThink')}} >
          <Image source={Next} style={styles.Next_Icon} />
          </TouchableOpacity>
      </View>
      <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >Contact us</Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('Contact')}} >
          <Image source={Next} style={styles.Next_Icon} />
          </TouchableOpacity>
      </View>
    </View>
    <View style={styles.Footer} >
     <CustomButton title={'Log out'} onPress={()=>{navigation.navigate('Login')}} />
    </View>

    </View>
  )
}

export default ProfileScreen

const styles=StyleSheet.create({
  MainCont:{
      flex:1,
      backgroundColor:Colors.Bg,
      padding:"3%"
  },
  MainHeader:{
    flex:0.15,
    flexDirection:'row',
    alignItems:'center'
  },
  Bobi_Logo:{
    width:60,height:60,
    resizeMode:'contain'
  },
  Profile_Txt:{
   fontSize:20,
   lineHeight:24,
   color:Colors.Green,
   marginLeft:'1%',
   fontFamily:Fonts.SF_SemiBold
  },

  Body:{
    flex:0.8,
    
  },
  ProfileCart:{
    backgroundColor:Colors.Green,
    borderRadius:10,
    padding:"4%",
    alignItems:'center',
    flexDirection:"row"
  },
   UserProfile:{
     width:100,height:100, marginRight:'4%'
   },
   DetailCont:{
      height:90,
      justifyContent:'space-between'
   },
  UserName:{
    fontSize:20,
    lineHeight:24,
    color:Colors.White,
    fontFamily:Fonts.SF_Bold 
  },
  RentedItem:{
    fontSize:14,
    lineHeight:18,
    color:Colors.White,
    fontFamily:Fonts.SF_SemiBold 
  },
  Identity_Btn:{
   borderWidth:1,
   padding:'3%',
   paddingHorizontal:"5%",
   borderColor:Colors.White,
   borderRadius:10,
   alignItems:'center'
  },
  Identity_Txt:{
    fontSize:14,
    lineHeight:18,
    color:Colors.White,
    fontFamily:Fonts.SF_Regular 
  },
  State_Cont:{
    backgroundColor:Colors.White,
    padding:'3%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:10,
    elevation:1,
    marginTop:"3%",
  },
  State_Txt:{
    fontSize:16,
    lineHeight:20,
    color:Colors.Black,
    fontFamily:Fonts.SF_Regular 
  },
  Next_Icon:{
     width:25,height:25
  },


  Footer:{
    flex:0.1,
 
  },
})
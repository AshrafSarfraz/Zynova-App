import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Themes/Colors'
import { Bank, Bg_Logo, Bobi_Logo, Profile, Profile2 } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'
import Spacer from '../../Components/Spacers/index (1)'
import spacerStyles from '../../Components/Spacers/style'


const Welcome = ({navigation}) => {
   
    const [BtnState,setBtnState]=useState(0)





  return (
    <ScrollView contentContainerStyle={styles.MainCont} >
        {Platform.OS == "ios" ?
        <>
        <View style={spacerStyles.isDefault} />
        <Image source={Bobi_Logo}  style={[styles.Logo, ]} resizeMode='contain' />
        </> :  
        <Image source={Bobi_Logo}  style={styles.Logo} resizeMode='contain' />
        }
        <Text style={styles.Welcome} >Welcome!!</Text>
    <ImageBackground source={Bg_Logo} style={styles.Bg_Img} resizeMode='contain' >
      <Text style={styles.Doing_Txt}>You are joining us today as:</Text>
      <View style={styles.Btn_Cont} >
           <TouchableOpacity  onPress={()=>{setBtnState(1)}} style={[styles.Profile_Btn,BtnState===1?styles.ActiveBtn:null]} >
           <Image source={Profile2} style={[styles.Profile_Img,{tintColor:BtnState===1?Colors.Green:Colors.White} ] } resizeMode='contain' />
           <Text style={[styles.Profile_Txt,{color:BtnState===1?Colors.Green:Colors.White}]} >Customer</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{setBtnState(2)}} style={[styles.Profile_Btn,BtnState===2?styles.ActiveBtn:null]}  >
           <Image source={Bank} style={[styles.Profile_Img,{tintColor:BtnState===2?Colors.Green:Colors.White} ] } />
           <Text style={[styles.Profile_Txt,{color:BtnState===2?Colors.Green:Colors.White}]} >Community/Company</Text>
           </TouchableOpacity>
      </View>
     
     {BtnState===2 ? 
        <TextInput style={styles.Input} placeholder='Enter Community Code'  placeholderTextColor={'#9E9E9E'}   />
        :null }
    </ImageBackground>
  
    {BtnState!==0? 
       <TouchableOpacity  style={styles.Btn} onPress={()=>{navigation.navigate('SignUp')}} >
       <Text style={styles.Join_Txt} >Join</Text>
       </TouchableOpacity>
       :null }

   
    </ScrollView>
  )
}

export default Welcome

const styles=StyleSheet.create({
    MainCont:{
        flexGrow:1,
        backgroundColor:Colors.Green,
        alignItems:'center',
        padding:'4%'
    },
    Bg_Img:{
        width:'100%',
        height:380,
       
    },
    Logo:{
        width:60,height:60,
        tintColor:'#FFFFFF',
        marginTop:'2%',
        marginBottom:'10%',
    },
    Welcome:{
        fontSize:38,
        fontFamily:Fonts.SF_Medium,
        color:Colors.White,
        lineHeight:50
    },
    Doing_Txt:{
   fontSize:16,
   fontFamily:Fonts.SF_Regular,
   color:Colors.White,
   textAlign:'center',
   marginBottom:'6%'
    },
    Btn_Cont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Profile_Btn:{
        width:'45%',
        height:200,
       borderWidth:2,
       borderRadius:10,
       borderColor:Colors.White,
       alignItems:'center',
       justifyContent:'center'
    },
    ActiveBtn:{
    backgroundColor:Colors.White,
    borderWidth:0
    },
    Profile_Img:{
        width:80,height:80,
        tintColor:Colors.White
    },
    Profile_Txt:{
        color:Colors.White,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        marginTop:'2%'
    },
    Input:{
        marginTop:'10%',
        padding:'3.5%',
        paddingHorizontal:'6%',
        backgroundColor:Colors.Bg,
        borderRadius:10,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        fontSize:14,
    },
    Btn:{
     backgroundColor:Colors.White,
     width:'100%',
     padding:'2%',
     borderRadius:10,
     alignItems:'center',
     marginTop:'18%',
    },
    Join_Txt:{
   fontFamily:Fonts.SF_Regular,
   fontSize:20,
   color:Colors.Green
    }
})
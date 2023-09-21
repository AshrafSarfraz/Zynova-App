import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Get, Give, Pick, Return } from '../../../../Themes/Images'
import { Colors } from '../../../../Themes/Colors'
import { Fonts } from '../../../../Themes/Fonts'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'


const SelectPreference = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
       <CustomHeader title={'Select Preference'}  onBackPress={()=>{navigation.goBack()}} />
       <Text style={styles.Select_Txt} >Please select the respective action to continue:</Text>
    
       <View style={styles.Cart_Container} >
         <View style={styles.InnerCart}  >
          <TouchableOpacity style={styles.Cart}  onPress={()=>{navigation.navigate('QrcodeScanner')}}  >
             <Image source={Pick}   style={styles.Logo} />
             <Text style={styles.Logo_Txt} >Pick up a Bobizz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Cart}  onPress={()=>{navigation.navigate('RentedItem',{ updateButtonState: 1 })}} >
             <Image source={Return}   style={styles.Logo} />
             <Text style={styles.Logo_Txt} >Return a Bobizz</Text>
          </TouchableOpacity>
         </View>
         <View style={styles.InnerCart}  >
         <TouchableOpacity style={styles.Cart}   onPress={()=>{navigation.navigate('RentedItem')}} >
             <Image source={Give}   style={styles.Logo} />
             <Text style={styles.Logo_Txt} >Give your Bobizz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Cart}  onPress={()=>{navigation.navigate('ScanQrCode')}} >
             <Image source={Get}   style={styles.Logo} />
             <Text style={styles.Logo_Txt} >Get your Bobizz</Text>
          </TouchableOpacity>
         </View>
       </View>
    
    </View>
  )
}

export default SelectPreference

const styles=StyleSheet.create({
  MainCont:{
     backgroundColor:Colors.Bg,
     padding:"4%"
  },
  Select_Txt:{
    fontSize:16,
    fontWeight:"500",
    fontFamily:Fonts.SF_Medium,
    marginVertical:'3%',
    color:Colors.Green
  },
  Cart_Container:{
    marginTop:"5%"
  
  },
  InnerCart:{
    flexDirection:"row",
     justifyContent:'space-between',
     marginBottom:"4%"
  },
  Cart:{
 
    backgroundColor:Colors.White,
    width:'48%',
    height:200,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    elevation:1, 
  },
  Logo:{
    width:80,height:80,
    marginBottom:"15%",
  },
  Logo_Txt:{
    color:Colors.Green,
    fontFamily:Fonts.SF_Medium,
    fontSize:14,
    lineHeight:16,

  }
})
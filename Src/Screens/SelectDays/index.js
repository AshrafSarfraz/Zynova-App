import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import CustomHeader2 from '../../Components/CustomHeader2/CustomHeader2'
import { Carts } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'

const SelectDays = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
        <View style={styles.Header} >
        <CustomHeader2 title={'Rent this Item'} onBackPress={()=>{navigation.goBack()}} />
        </View>

        <View style={styles.Body} >
            <Text style={styles.Need_Txt} >I need this item for..</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('SingleDay')}} style={styles.Carts1} >
          <ImageBackground source={Carts}  style={styles.Carts} imageStyle={{borderRadius:15}} >
            <Text style={styles.Day_Txt} >A Single day</Text> 
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('MultipleDay')}} style={styles.Carts1} >
          <ImageBackground source={Carts}  style={styles.Carts} imageStyle={{borderRadius:15}} >
            <Text style={styles.Day_Txt} >Multiple days</Text> 
          </ImageBackground>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SelectDays

const styles=StyleSheet.create({
    MainCont:{
        flex:1,
        backgroundColor:Colors.Bg,
        padding:'3%'
    },
    Header:{
        flex:0.1,
    },
    Body:{
        flex:0.9,
        alignItems:'center',
        justifyContent:'center'
    },
    Carts1:{
      width:'96%',
      height:130,
      marginBottom:'12%',
      borderRadius:40,
      alignItems:"center"
 },
    Carts:{
         height:'100%',
         width:'96%',
         alignItems:"center",
         justifyContent:"center",
         alignSelf:'center'
       
    },
    Need_Txt:{
        color:Colors.Green,
        fontSize:24,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:30,
        bottom:25,  
    },
    Day_Txt:{
        color:Colors.White,
        fontSize:22,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:30,
       
    }
    
})
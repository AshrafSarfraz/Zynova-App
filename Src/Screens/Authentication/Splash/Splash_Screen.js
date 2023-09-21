import { View, Text, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Bobi, Gif, Logo } from '../../../Themes/Images'
import { NavigationProp, useNavigation } from '@react-navigation/native'



const Splash_Screen=({navigation}) => {
  
setTimeout(() => {
   navigation.navigate('OnBoarding')
}, 3000);

  return (
    <View style={styles.Main_Container} >
      <Image source={Bobi} style={styles.Logo_Img} />
      <Image source={Gif}    style={styles.Gif_Img} />
    </View>
  )
}

export default Splash_Screen

const styles=StyleSheet.create({
 Main_Container:{
     flex:1,
     paddingTop:'35%',
     paddingBottom:'6%',
    backgroundColor:Colors.Green,
    alignItems:'center',
    justifyContent:'space-between'
 },
 Logo_Img:{
  width:'50%',
  height:'40%',
  resizeMode:'cover'
},
Gif_Img:{
  width:50,height:60
},
}
)
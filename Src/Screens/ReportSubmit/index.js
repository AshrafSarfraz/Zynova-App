import { View, Text, StyleSheet,TouchableOpacity,Image, Alert } from 'react-native'
import React from 'react'
import Bestdropdown from '../../Components/DropDown/DropDown'
import { Fonts } from '../../Themes/Fonts'
import {Colors } from '../../Themes/Colors'
import { Device, Mobile, Star, Tick2 } from '../../Themes/Images'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import CustomButton from '../../Components/CustomButton/CustomButton'
const ReportSubmit = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
        <View style={styles.Header} >
        <CustomHeader title={'Report Object'} onBackPress={()=>{navigation.goBack()}}  />
        </View>
        <View style={styles.Body} >
        <Image source={Device} style={styles.Mobile_Img} />
         <View style={styles.Report_Cont} >
         <Text style={styles.Report_Txt} > Report Submitted</Text>
         <Image source={Tick2} style={styles.Tick} />
         </View>
         <Text style={styles.Thank_Txt} >Thank you for participating in keeping the community safe</Text>
         </View>
          <View  style={styles.Footer} >
         <CustomButton title={'Back to Explore'} onPress={()=>{Alert.alert('Back to Explore')}} />
         </View>
    </View>
  )
}

export default ReportSubmit

const styles=StyleSheet.create({
MainCont:{
    flex:1,
    backgroundColor:Colors.Bg,
    padding:'3%'
},
Header:{
    flex:0.15,

},
Body:{
    flex:0.7,
    justifyContent:'center',
    alignItems:"center"
},
Mobile_Img:{
 width:250,height:250,

},
Report_Cont:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:"2%"
},
Report_Txt:{
     fontSize:18,
     fontWeight:'500',
     fontFamily:Fonts.SF_Bold,
     lineHeight:22,
     color:Colors.Black,
     marginRight:"2%"
},
Tick:{
    width:25,height:25
},
Thank_Txt:{
   width:'90%',
   textAlign:'center',
   fontSize:16,
   fontWeight:'400',
   fontFamily:Fonts.SF_Regular,
   lineHeight:22,
   color:'#424242',
   marginRight:"2%"
},
Footer:{
    flex:0.15,
   justifyContent:'flex-end'
}

})
import { View, Text, StyleSheet,TouchableOpacity,Image, Platform } from 'react-native'
import React from 'react'
import Bestdropdown from '../../Components/DropDown/DropDown'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../Themes/Fonts'
import { Colors } from '../../Themes/Colors'
import { W_Flag } from '../../Themes/Images'
import spacerStyles from '../../Components/Spacers/style'

const ReportUser = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      {Platform.OS == "ios" ? 
      <>
      <View style={spacerStyles.isDefault} />
        <CustomHeader title={'Report Object'} onBackPress={()=>{navigation.goBack()}}  />
        </> :
        <CustomHeader title={'Report Object'} onBackPress={()=>{navigation.goBack()}}  />
      }
        <Text style={styles.Type_Txt} >Signalment type</Text>
      <Bestdropdown/>

      <TouchableOpacity style={styles.Btn}  onPress={()=>{navigation.navigate('ReportSubmit')}} >
            <Image source={W_Flag} style={styles.Plus1} />
            <Text  style={styles.Rent}>Report Object</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReportUser

const styles=StyleSheet.create({
    MainCont:{
       flex:1,
       padding:'3%',
       backgroundColor:Colors.Bg
    },
    Type_Txt:{
        paddingVertical:'4%',
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:19,
        color:'#263238'

    },
    
    Btn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#E31D1C',
        width:'100%',
        padding:'5%',
        marginVertical:'10%',
        borderRadius:10
      },
      Plus1:{
        width:12,height:14,
        
      },
      Rent:{
        color:Colors.White,
        fontSize:16,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:19,
        paddingHorizontal:'2%'
      },

})
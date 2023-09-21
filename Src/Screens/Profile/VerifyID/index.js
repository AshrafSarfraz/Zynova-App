import { View, Text,ScrollView,TouchableOpacity,Image,TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../../Themes/Fonts'
import { DocPlus, } from '../../../Themes/Images'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import ReasonDropDown from '../../../Components/DropDown/Reason'
import Bestdropdown2 from '../../../Components/DropDown/SelectObject'
import ID_Type from '../../../Components/DropDown/ID_Type'

const VerifyID = ({navigation}) => {
   
  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
     <CustomHeader title={'Verify ID'}  onBackPress={()=>{navigation.goBack()}} />
        
      
        <View>
        <View  style={styles.InputCont} >
        
        
       </View>
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={()=>{}} style={styles.Btn} >
        <Image style={styles.Img} source={DocPlus} />
        <Text style={styles.Upload_Txt} >Tap to attach your Identity Card</Text>
        </TouchableOpacity>
       </View>
         <View style={styles.DropDownCont} >
           <ID_Type/>
         </View>
    
       <CustomButton title={'Submit ID'} onPress={()=>{''}} />

       <Text style={styles.Subject_Txt} >Note: We will delete your ID picture as soon  as we verify your identity!</Text>
       </View>

      

   </ScrollView>
  )
}

export default VerifyID

const styles=StyleSheet.create({
    MainCont:{
        padding:'3%',
        backgroundColor:Colors.Bg
    },
   
    
  InputCont:{
    marginVertical:'3%'
  },
  DropDownCont:{
    marginTop:'-15%',
    marginBottom:'25%'
  },
  Subject_Txt:{
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
    color:Colors.Green,
    lineHeight:18,
    marginVertical:'14%',
    textAlign:'center'
  },
  Doc_Cont:{
    height:250,
    width:'100%',
    backgroundColor:Colors.White,
    borderRadius:10,
    elevation:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:100
  },
  Btn:{
    alignItems:'center',
    justifyContent:'center'
  },
  Img:{
    width:50,height:50
  },
  Upload_Txt:{
    color:Colors.Grey9,
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
     marginTop:'5%',
     textAlign:'center',
     marginLeft:"-2%"
    
  }
   
})
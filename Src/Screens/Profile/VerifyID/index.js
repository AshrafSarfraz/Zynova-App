import { View, Text,ScrollView,TouchableOpacity,Image,TextInput,StyleSheet, Platform } from 'react-native'
import React,{useState} from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../../Themes/Fonts'
import { DocPlus, } from '../../../Themes/Images'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import ReasonDropDown from '../../../Components/DropDown/Reason'
import Bestdropdown2 from '../../../Components/DropDown/SelectObject'
import ID_Type from '../../../Components/DropDown/ID_Type'
import spacerStyles from '../../../Components/Spacers/style'

const VerifyID = ({navigation}) => {
  const [filePath, setFilePath] = useState(null);
  const [replaceicon, setreplaceicon] = useState(true);

  const chooseFile = () => {
    setreplaceicon(false)
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,

    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setFilePath(response.assets[0].uri);
      }
    });
  };

  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
    {Platform.OS == "ios" ? 
    <>
    <View style={spacerStyles.isDefault} />
     <CustomHeader title={'Verify ID'}  onBackPress={()=>{navigation.goBack()}} />
     </> : 
     <CustomHeader title={'Verify ID'}  onBackPress={()=>{navigation.goBack()}} />
    }
        
      
        <View>
        <View  style={styles.InputCont} >
        
        
       </View>
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={chooseFile} style={styles.Btn} >
        {replaceicon === true ? (<Image source={DocPlus} style={styles.Img} />)
        : 
        (<Image source={{ uri: filePath }} style={{width:200,height:200,marginTop:'4%',marginBottom:"-4%"}} />)}

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
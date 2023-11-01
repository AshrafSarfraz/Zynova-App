import { View, Text,ScrollView,TouchableOpacity,Image,TextInput,StyleSheet, Platform } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../../Themes/Fonts'
import { DocPlus, } from '../../../Themes/Images'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import ReasonDropDown from '../../../Components/DropDown/Reason'
import AcceptAlert from '../../../Components/Alerts/Request_Accept'
import CancelAlert from '../../../Components/Alerts/CancelAlert'
import spacerStyles from '../../../Components/Spacers/style'

const CancelScreen = ({navigation}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };
  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
    {Platform.OS == "android" ? 
    <>
    <View style={spacerStyles.isDefault} />
     <CustomHeader title={'Cancel'}  onBackPress={()=>{navigation.goBack()}} />
     </> :
     <CustomHeader title={'Cancel'}  onBackPress={()=>{navigation.goBack()}} />
    }
        
      
        <View>
        <View  style={styles.InputCont} >
        <Text style={styles.Subject_Txt} >Cancellation Reason</Text>
         <ReasonDropDown/>
       </View>
      <Text style={styles.Subject_Txt} >Upload up to 3 images:</Text>
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={()=>{}} >
        <Image style={styles.Img} source={DocPlus} />
        <Text style={styles.Upload_Txt} >Upload here</Text>
        </TouchableOpacity>
       </View>
       <CustomButton title={'Submit'} onPress={showAlert} />
       </View>

       <CancelAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('RentedItem')}}
        
      />

   </ScrollView>
  )
}

export default CancelScreen

const styles=StyleSheet.create({
    MainCont:{
        padding:'3%',
        backgroundColor:Colors.Bg
    },
   
    
  InputCont:{
    marginVertical:'4%'
  },
  Subject_Txt:{
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
    color:Colors.Green,
    lineHeight:18,
    marginVertical:'4%'
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
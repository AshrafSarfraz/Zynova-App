import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image, Alert, TextInput } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { Back_Icon, Dots } from '../../Themes/Images'
import ReportAlert from '../../Components/Alerts/ReportAlert'
import Bestdropdown from '../../Components/DropDown/DropDown'
import CustomButton from '../../Components/CustomButton/CustomButton'
import Bestdropdown2 from '../../Components/DropDown/SelectObject'
import FeedBackAlert from '../../Components/Alerts/FeedbackAlert'



const ReportUsers = ({navigation}) => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [FeedBackAlerts, setFeedBackAlerts] = useState(false);
    
    const showAlert = () => {
      setAlertVisible(true);
    };
  
    const hideAlert = () => {
      setAlertVisible(false);
    };
    const showFeedbackAlert = () => {
        setFeedBackAlerts(true);
      };
    
      const hideFeedbackAlert = () => {
        setFeedBackAlerts(false);
      };
       
     

  return (
   <ScrollView  contentContainerStyle={styles.MainCont} >
    <View  style={styles.Header} >
      <View style={{flexDirection:'row',alignItems:'center'}} >
        <TouchableOpacity  onPress={()=>{navigation.goBack()}} >
        <Image source={Back_Icon} style={styles.Go_Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Alex} >Report User</Text>
        </View>
        <TouchableOpacity onPress={showAlert} >
        <Image source={Dots} style={styles.Dots} />
        </TouchableOpacity>
   </View>
      
      <View style={styles.Body} >
        <View  style={{marginVertical:'4%'}}>
       <Bestdropdown/>
       </View>
       <Text style={styles.Txt_Other} >If you selected ‘other’, please explain the type of report you want to submit</Text>
       <View  style={{marginVertical:'4%'}}>
       <TextInput style={styles.TypeInput} placeholder='Enter Type'  placeholderTextColor={Colors.Grey9} />
       </View>
       <Text style={styles.Txt_Other} >If it concerns a particular rent, please declare which one</Text>
      
      
       <View  style={{marginVertical:'5%'}}>
       <Bestdropdown2/>
       </View>
       <Text style={styles.Txt_Other} >If it concerns a particular rent, please declare which one</Text>
      
       <View  style={{marginVertical:'5%'}}>
       <Bestdropdown2/>
       </View>
       <Text style={styles.Txt_Other} >If it concerns a particular rent, please declare which one</Text>
       <View  style={{marginVertical:'5%'}}>
       <Bestdropdown2/>
       </View>
      </View>

    <View style={{marginTop:"20%"}} >
    <CustomButton title={'Report User'}  onPress={showFeedbackAlert} />
     </View>
     

   <ReportAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),Alert.alert('No Functionality Added')}}
      />
       <FeedBackAlert
        visible={FeedBackAlerts}
        message="This is a custom alert!"
        onClose={()=>{hideFeedbackAlert(),navigation.navigate('BottomTab')}}
      /> 
   </ScrollView>
  )
}

export default ReportUsers


const styles=StyleSheet.create({
    MainCont:{
    padding:'3%',
    backgroundColor:Colors.Bg
    },
    Header:{
        flexDirection:'row',
        justifyContent:'space-between',
       },
       Go_Back_Icon:{
        width:30,height:30,
        tintColor:Colors.Green,
        marginRight:'5%'
       },
       Alex:{
        fontSize:20,fontFamily:Fonts.SF_SemiBold,color:Colors.Green
       },
       Dots:{
        width:50,height:50,tintColor:'#000000',
        resizeMode:'center'
       },
       Txt_Other:{
        fontSize:14,
        fontFamily:Fonts.SF_Regular,
        color:Colors.Green,
        lineHeight:16
       },
       TypeInput:{
        padding:'3%',
        backgroundColor:Colors.White,
        borderRadius:5,
        borderWidth:0.2

       }
})
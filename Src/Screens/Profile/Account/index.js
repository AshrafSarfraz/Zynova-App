import { View, Text, StyleSheet, TouchableOpacity,Image,TextInput, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Message, Profile } from '../../../Themes/Images'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import { Fonts } from '../../../Themes/Fonts'
import DeleteAlert from '../../../Components/Alerts/DeleteAlert'

const Account = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };


  return (
    <ScrollView style={styles.MainCont}>
    <View style={styles.HeaderCont} >
    <CustomHeader title={'Account'}  onBackPress={()=>{navigation.goBack()}} />
    </View>
    <View  style={styles.Body} >
    <View style={[styles.Input_Name,Username!==''? styles.Active_Input_Field:null]}>
    <Image source={Profile} style={[styles.Input_Icon ,{tintColor:Username!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
    <TextInput
            placeholder="Name"
            value={Username}
            placeholderTextColor={Colors.Grey9}
            onChangeText={(txt) => { setUsername(txt); }}
            style={styles.User_Input}
            />
          </View>
    <View style={[styles.Input_Email,Email!==''? styles.Active_Input_Field:null]}>
    <Image source={Message} style={[styles.Input_Icon ,{tintColor:Email!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
    <TextInput
            placeholder="Luke.Skywalker@domain.com"
            value={Email}
            placeholderTextColor={Colors.Grey9}
            onChangeText={(txt) => { setEmail(txt); }}
            style={styles.User_Input}
          
            />
          </View>
          <View  style={{marginTop:"20%"}} >
          <CustomButton title={'Save Changes'}  onPress={()=>{navigation.goBack()}}/>
          </View>
    </View>
          <View  style={styles.Footer} >
          <TouchableOpacity style={styles.ChangePassword} onPress={()=>{navigation.navigate('Forget')}} >
          <Text style={styles.ChangeTxt} >Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Delete} onPress={showAlert} >
          <Text style={styles.DeleteTxt} >Delete Account</Text>
          </TouchableOpacity>
          </View>
          <DeleteAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=> {hideAlert()}}
        OnDelete={()=>{hideAlert(),navigation.navigate('Login')}}
      />
    </ScrollView>
  )
}

export default Account
const styles=StyleSheet.create({
  MainCont:{
   flex:1,
   backgroundColor:Colors.Bg,
   paddingHorizontal:'3%',
  },
  HeaderCont:{
    flex:0.1,
    justifyContent:"center"
  
  },
  Body:{
    flex:0.75,
  
  },

  Input_Name: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.White4,
    elevation:1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop:'4%',
    marginBottom: 14,
  },
  Input_Email: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.White4,
    elevation:1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: '8%',
  },
  Active_Input_Field:{
     borderWidth:2,
     borderColor:Colors.Green,
     backgroundColor:Colors.White

  },
  Input_Icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: Colors.Grey9,
  },
  User_Input: {
    flex: 1,
    fontSize: 16,
    color: Colors.Black2,
  },
  Footer:{
    flex:0.2,
    marginTop:'50%'
   
  },
  ChangePassword:{
    borderWidth:1,
    padding:'4%',
    alignItems:'center',
    borderColor:Colors.Green,
    borderRadius:10,
    marginTop:'3%'
  },
  ChangeTxt:{
     fontSize:14,
     color:Colors.Green,
     fontFamily:Fonts.SF_Regular,
     lineHeight:18
  },
  Delete:{
    marginVertical:'3%',
    alignItems:'center',
    borderColor:Colors.Green,
    borderRadius:10
  },
  DeleteTxt:{
    fontSize:14,
    color:Colors.Red,
    fontFamily:Fonts.SF_Regular,
    lineHeight:18
 },

})
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../Themes/Colors';
import {  Hide, Lock, Logo, Message, Show } from '../../../Themes/Images';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import spacerStyles from '../../../Components/Spacers/style';


const SignInScreen = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ShowPassword,setShowPassword]=useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <View>
        {Platform.OS == "ios" ? 
        <>
        <View style={spacerStyles.isDefault}/>
        <Image source={Logo} style={styles.H_Logo} resizeMode="contain" /> 
        </> : 
        <Image source={Logo} style={styles.H_Logo} resizeMode="contain" />
      }
        <Text style={styles.Welcome_Txt}>Welcome Back!</Text>
        <Text style={styles.SignUp_Txt}>Sign in with your account</Text>
        <View style={styles.InputContainer}>
         
          <View style={[styles.Input_Field,Email!==''? styles.Active_Input_Field:null]}>
            <Image source={Message} style={[styles.Input_Icon ,{tintColor:Email!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Luke.Skywalker@domain.com"
              value={Email}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setEmail(txt); }}
              style={styles.User_Input}
            />
          </View>
          <View style={[styles.Input_Field,Password!==''? styles.Active_Input_Field:null]}>
            <Image source={Lock} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
            <TextInput
              placeholder="Password"
              value={Password}
              secureTextEntry={!ShowPassword}
              placeholderTextColor={Colors.Grey9}
              onChangeText={(txt) => { setPassword(txt); }}
              style={styles.User_Input} />
              { ShowPassword===false?  
              <TouchableOpacity onPress={()=>{setShowPassword(true)}} >
              <Image source={Hide} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
              </TouchableOpacity> 
               :  
               <TouchableOpacity onPress={()=>{setShowPassword(false)}} >
               <Image source={Show} style={[styles.Input_Icon ,{tintColor:Password!==''?Colors.Black2:Colors.Grey9}  ]} resizeMode='contain' />
               </TouchableOpacity> 
                 }
          </View>
     <View style={styles.Forget_Cont} >
          <View style={styles.container}>
          <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
          >
         {isChecked && <Icons name="check" color="white" size={12} />}
         </TouchableOpacity>
         <Text style={styles.label}>Remember me</Text>
         </View>
         <TouchableOpacity  style={styles.Forget_Btn} onPress={()=>{navigation.navigate('Forget')}}  >
         <Text style={styles.Forget_Txt} >Forgot Password</Text>
         </TouchableOpacity>
    </View>

        </View>
        <View style={styles.SignUp_Btn} >
        <CustomButton
           title='Sign In'
           onPress={() => {
           navigation.navigate('BottomTab', { updateButtonState: 1 });
  }}
/>

        </View>
        <TouchableOpacity style={styles.Guest} onPress={()=>{navigation.navigate('BottomTab')}} >
          <Text style={styles.Guest_Btn} >Continue as Guest</Text>
        </TouchableOpacity>
        <View style={styles.Btn_Cont} >
          <Text style={styles.Already_Txt} >Don’t have an account?  </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} style={styles.SignIn_Btn} >
          <Text  style={styles.SignIn_Txt} >Sign Up</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};
export default SignInScreen;
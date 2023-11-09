import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../Themes/Colors'
import { Back_Icon, Bobi_Logo, Next, User } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'
import { launchImageLibrary } from 'react-native-image-picker';
import CustomButton from '../../Components/CustomButton/CustomButton'
import spacerStyles from '../../Components/Spacers/style'

const ProfileScreen = ({ navigation }) => {

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
    <View style={styles.MainCont} >
      {Platform.OS == "ios" ? 
      <>
      <View style={spacerStyles.isDefault} />
      <View style={styles.MainHeader} >
        <Image source={Bobi_Logo} style={styles.Bobi_Logo} />
        <Text style={styles.Profile_Txt} >Profile</Text>
      </View>
      </> : 
      <View style={styles.MainHeader} >
        <Image source={Bobi_Logo} style={styles.Bobi_Logo} />
        <Text style={styles.Profile_Txt} >Profile</Text>
      </View>
      }

      <View style={styles.Body} >
     
      <View style={styles.ProfileCart} >
        <TouchableOpacity onPress={chooseFile} >  
      <View style={styles.ImageCart} >
          {replaceicon === true ? (<Image source={User} style={styles.UserProfile} />)
          : 
          (<Image source={{ uri: filePath }} style={[styles.UserProfile,{borderRadius:50}]} />)}
          </View>
          </TouchableOpacity>  
          <View style={styles.DetailCont} >
            <Text style={styles.UserName} >Luke Skywalker</Text>
            <Text style={styles.RentedItem} >Rented Objects: 0</Text>
            <TouchableOpacity style={styles.Identity_Btn} onPress={() => { navigation.navigate('VerifyID') }}>
              <Text style={styles.Identity_Txt} >Verify your Identity</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('Account') }} >  
        <View style={styles.State_Cont} >
        <Text style={styles.State_Txt} >Account</Text>
        <Image source={Next} style={styles.Next_Icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Balance') }} >
        <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >Balance</Text>
            <Image source={Next} style={styles.Next_Icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('WhatUserThink') }} >
        <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >What users think about you</Text>
            <Image source={Next} style={styles.Next_Icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Contact') }} >
        <View style={styles.State_Cont} >
          <Text style={styles.State_Txt} >Contact us</Text>
            <Image source={Next} style={styles.Next_Icon} />
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Footer} >
        <CustomButton title={'Log out'} onPress={() => { navigation.navigate('Login') }} />
      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: Colors.Bg,
    padding: "3%"
  },
  MainHeader: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Bobi_Logo: {
    width: 60, height: 60,
    resizeMode: 'contain'
  },
  Profile_Txt: {
    fontSize: 20,
    lineHeight: 24,
    color: Colors.Green,
    marginLeft: '1%',
    fontFamily: Fonts.SF_SemiBold
  },

  Body: {
    flex: 0.8,

  },
  ProfileCart: {
    backgroundColor: Colors.Green,
    borderRadius: 10,
    padding: "4%",
    alignItems: 'center',
    flexDirection: "row"
  },
  UserProfile: {
    width: 100, height: 100, marginRight: '4%',
  },
  DetailCont: {
    height: 90,
    justifyContent: 'space-between'
  },
  UserName: {
    fontSize: 20,
    lineHeight: 24,
    color: Colors.White,
    fontFamily: Fonts.SF_Bold
  },
  RentedItem: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_SemiBold
  },
  Identity_Btn: {
    borderWidth: 1,
    padding: '3%',
    paddingHorizontal: "5%",
    borderColor: Colors.White,
    borderRadius: 10,
    alignItems: 'center'
  },
  Identity_Txt: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_Regular
  },
  State_Cont: {
    backgroundColor: Colors.White,
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
 
    marginTop: "3%",
  },
  State_Txt: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Black,
    fontFamily: Fonts.SF_Regular
  },
  Next_Icon: {
    width: 25, height: 25
  },


  Footer: {
    flex: 0.1,

  },
})
import { View, Text,ScrollView ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../Themes/Colors'
import { Back_Icon, Flag, Star } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'


const OwnerProfiles = ({navigation}) => {
  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
      <View  style={styles.Header} >
          <TouchableOpacity   onPress={()=>{navigation.goBack()}}  style={styles.Back_Cont} >
            <Image  source={Back_Icon} style={styles.Back_Icon}/>
            <Text 
            style={styles.Back_Txt} >Details
            </Text>
          </TouchableOpacity>
         <View style={styles.Auth_Cont} >
           <TouchableOpacity onPress={()=>{navigation.navigate('Report')}} style={styles.Auth_Icon} >
            <Image source={Flag} style={styles.Bell} />
           </TouchableOpacity>
          </View> 
          </View>
      <View>
    <View style={styles.User_Cont} >
      <Image source={require('../../Assets/Images/img1.png')} style={styles.ProfileImg} />
      <View  style={styles.Cart}>
        <Text style={styles.Name} >Luke Skywalker</Text>
        <Text style={styles.Rented} >Rent Completed: 0</Text>
        <View style={styles.RatingCont} >
          <Image source={Star}  style={styles.Star} />
        <Text style={styles.Rating} >4.5 (13)</Text>
        </View>
      </View>
    </View>

      <Image  source={require('../../Assets/Images/Rating_X.png')}  style={styles.Rating_X}/>
   
      <Text style={styles.Rating_Yet}> This user has not received any ratings yet!</Text>
      </View>
   </ScrollView>
  )
}

export default OwnerProfiles

const styles=StyleSheet.create({
  MainCont:{
    backgroundColor:Colors.Bg,
    flex:1,
    padding:'3%'
  },
  Header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:'4%',
    backgroundColor:Colors.Bg,
    },
    Back_Cont:{
       flexDirection:'row',
       alignItems:"center",
    
    },
    Back_Txt:{
         marginLeft:"8%",
         color:Colors.Green,
         fontFamily:Fonts.SF_Medium,
         lineHeight:24,
         fontSize:20
    },
    Back_Icon:{
     width:25,height:25,
     marginLeft:"5%",
     tintColor:Colors.Green
    },
    Bobi:{
      width:50,height:50,
      resizeMode:'contain'
    },
    Auth_Cont:{
      flexDirection:'row',
      alignItems:"center",
      left:'10%'
    },
     
    Bell:{
      width:40,height:40,
      marginRight:'10%'
      
    },
  



  User_Cont:{
    backgroundColor:Colors.Green,
    borderRadius:10,
    padding:'3%',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:'4%'
  },
  Cart:{
    marginLeft:'3%',
    justifyContent:'space-evenly',
    height:100
  },
  ProfileImg:{
    width:100,height:100
  },
  
  Name:{
   fontSize:20,
   fontFamily:Fonts.SF_Bold,
   color:Colors.White,
   lineHeight:25,
  },
  Rented:{
    fontSize:14,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    lineHeight:20,
  },
  Rating:{
    fontSize:14,
    fontFamily:Fonts.SF_Medium,
    color:Colors.White,
    lineHeight:16,
    marginTop:'3%'
  },
  RatingCont:{
    flexDirection:'row',
    alignItems:'center',
},
 
  Star:{
    width:20,height:20,tintColor:Colors.White,marginRight:'4%'
  },
  
  Rating_X:{
    width:250,height:250,
    alignSelf:"center",
    marginTop:'10%'
   },
   
  Rating_Yet:{
    fontSize:22,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Green,
    lineHeight:25,
   textAlign:'center',
   width:'90%',
   alignSelf:'center',
   marginTop:'10%'
  },

})
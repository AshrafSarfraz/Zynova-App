import { View, Text,ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../Themes/Colors'
import { Star } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'


const OwnerProfiles = ({navigation}) => {
  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
    <CustomHeader title={'Profile'}  onBackPress={()=>{navigation.goBack()}} />
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
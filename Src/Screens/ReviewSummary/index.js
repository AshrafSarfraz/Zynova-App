import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../Themes/Colors'
import CustomHeader2 from '../../Components/CustomHeader2/CustomHeader2'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { Exclimation, Star, Star3, Tick2, Tick3 } from '../../Themes/Images'
import { Fonts } from '../../Themes/Fonts'

const Review_Summary = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
        <View style={styles.HEADER} >
            <CustomHeader2 title={'Review Summary'} onBackPress={()=>{navigation.goBack()}} />
        </View>
        <View style={styles.Body} >
          <View style={styles.ProductCart} >
            <View style={styles.ImgCont} >
            <Image style={styles.Img} source={require('../../Assets/Images/shoes.png')} resizeMode='contain' />
            </View>
            <View style={styles.DetailCont} >
                 <Text style={styles.Title}>Suga leather shoes</Text>
                 <View style={styles.RatingCont} >
                    <Text style={styles.State} >State:</Text>
                    <Image style={styles.Star} source={Star} />
                    <Image style={styles.Star} source={Star} />
                    <Image style={styles.Star} source={Star} />
                    <Image style={styles.Star} source={Star} />
                    <Image style={styles.Star} source={Star3} />
                 </View>
                 <View style={styles.PriceCont} >
                    <Text style={styles.Price}>Price :</Text>
                    <Text style={styles.PerDay}>CHF 3.60/day</Text>
                 </View>
            </View>
          </View>
        <View  style={styles.RentedCart} >
      <View style={styles.PickUp_Cont} >
        <Text style={styles.PickUp_Text} >Pick up</Text>
        <View style={styles.DayTime} >
        <Text style={styles.Date_Text} >Dec 24, 2023 | </Text>
        <Text style={styles.Time_Text} >10:00 AM</Text>
        </View>
      </View>
      <View style={styles.PickUp_Cont} >
        <Text style={styles.PickUp_Text} >Return</Text>
        <View style={styles.DayTime} >
        <Text style={styles.Date_Text} >Dec 24, 2023 | </Text>
        <Text style={styles.Time_Text} >10:00 AM</Text>
        </View>
      </View>
      <View style={styles.PickUp_Cont} >
        <Text style={styles.PickUp_Text} >Meeting Point</Text>
        <View  >
        <Text style={styles.Date_Text} >Rolex Learning Center, 1015</Text>
        <Text style={styles.Ecu_Text} >Ecublens, Suisse</Text>
        </View>
      </View>
      <View style={styles.PickUp_Cont} >
        <Text style={styles.PickUp_Text} >Duration</Text>
        <View  >
        <Text style={styles.Date_Text} >9 Days</Text>
        </View>
      </View>
    
        </View>
        <View style={styles.RentPerDay} >
        <Text style={styles.Total_Txt} >Total Amount</Text>
        <Text style={styles.CHF_Txt} >160.00 CHF</Text>
        </View>
        <View style={styles.Tick_Exclimation_Cont} >
        <View style={styles.TickCont} >
        <Image style={styles.Tick} source={Tick3} />
        <Text style={styles.Request} >Automatically Accept Rent Requests</Text>
        </View>
        <Image style={styles.Tick} source={Exclimation} />
        </View>
        </View>
        <View style={styles.Footer} >
        <CustomButton title={'Continue'} onPress={()=>{navigation.navigate('Payment')}} />
        </View>
    </View>
  )
}

export default Review_Summary

const styles=StyleSheet.create({
    MainCont:{
    flex:1,
    padding:'3%',
    backgroundColor:Colors.Bg
    },
    HEADER:{
     flex:0.1,
    
    },
    Body:{
      flex:0.8,
      backgroundColor:Colors.Bg
      
    },
    ProductCart:{
     flexDirection:'row',
     alignItems:'center',
     backgroundColor:"#FFFFFF",
     elevation:1,
     borderRadius:10,
     borderWidth:0.2
     
    },
    DetailCont:{
       justifyContent:'space-between',
        height:70
    },
    ImgCont:{
    backgroundColor:'#ECECEC',
    borderRadius:10,
    padding:'2%',
    margin:'2%',
    marginRight:"4%"
    },
    Title:{
      fontSize:16,
      fontFamily:Fonts.SF_Medium,
      lineHeight:20,
      color:Colors.Black,
    },
    Img:{
      width:120,height:70,
    },
    RatingCont:{
      flexDirection:'row',
      alignItems:'center'
    },
    Star:{
      width:13,height:13,
      marginRight:'2%',
      marginBottom:'2%'
    },
    State:{
      fontSize:14,
      fontFamily:Fonts.SF_Medium,
      lineHeight:19,
      color:Colors.Black,
      marginRight:"3%"
    },
    PriceCont:{
    flexDirection:'row', 
    alignItems:'center',
   
    },
    Price:{
      fontSize:14,
      fontFamily:Fonts.SF_Medium,
      lineHeight:19,
      color:Colors.Black,
      marginRight:"3%"
    },
    RentedCart:{
     backgroundColor:'#FFFFFF',
     marginVertical:"3%",
     padding:'3%',
     paddingBottom:'0%',
     borderRadius:10,
     borderWidth:0.2,
    
    
    },
    PickUp_Cont:{
      flexDirection:"row",
      justifyContent:'space-between',
      marginBottom:"5%",
      alignItems:"center"
    },
    DayTime:{
     flexDirection:'row',
     alignItems:'center'
    },
    PickUp_Text:{
      fontSize:14,
      fontFamily:Fonts.SF_Bold,
      lineHeight:19,
      color:Colors.Black,
    },
    Date_Text:{
      fontSize:14,
      fontFamily:Fonts.SF_Regular,
      lineHeight:19,
      color:Colors.Black,
    },
    Time_Text:{
      fontSize:14,
      fontFamily:Fonts.SF_Regular,
      lineHeight:19,
      color:Colors.Black,
    },
    Ecu_Text:{
      textAlign:"right",
      fontSize:14,
      fontFamily:Fonts.SF_Regular,
      lineHeight:19,
      color:Colors.Black,
    },
    PerDay:{
      fontSize:14,
      fontFamily:Fonts.SF_Medium,
      lineHeight:19,
      color:Colors.Green,
     
    },
    RentPerDay:{
      backgroundColor:Colors.White,
      paddingHorizontal:'3%',
      paddingVertical:"6%",
      borderRadius:10,
      elevation:1,
      borderWidth:0.2,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center"
    },
    Total_Txt:{
      fontSize:16,
      fontFamily:Fonts.SF_SemiBold,
      lineHeight:22,
      color:Colors.Black,
    },
    CHF_Txt:{
      fontSize:18,
      fontFamily:Fonts.SF_SemiBold,
      lineHeight:24,
      color:Colors.Green,
    },
    Tick_Exclimation_Cont:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center",
      marginVertical:'4%'
    },
    TickCont:{
      flexDirection:'row',
      alignItems:'center'
    },
    Tick:{
      width:30,height:30
    },
    Request:{
      fontSize:14,
      fontFamily:Fonts.SF_Regular,
      lineHeight:20,
      color:Colors.Green,
      marginLeft:"4%"
    },
    Footer:{
        flex:0.1,
        
       justifyContent:'flex-end'
    }
})
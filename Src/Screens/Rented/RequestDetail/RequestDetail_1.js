import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView, ProgressBarAndroid } from 'react-native'
import React,{useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Chatting, Flag, Heart, Location, Modify, Plus1, QR, Scan, Star } from '../../../Themes/Images';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';
import SuccessAlert from '../../../Components/Alerts/Success_Alert';
import AcceptAlert from '../../../Components/Alerts/Request_Accept';


const slides = [
  {
    key: 'slide1',
   
    image: require('../../../Assets/Images/headphone2.png'), // Replace with your own image path
  },
  {
    key: 'slide2',
    image: require('../../../Assets/Images/headphone2.png'),  // Replace with your own image path
  },
  {
    key: 'slide3',
    image: require('../../../Assets/Images/headphone2.png'),  // Replace with your own image path
  },
];



const RequestDetail_1 = ({navigation}) => {
    const route=useRoute();
    const Product=route.params.Data;
    const [currentIndex, setCurrentIndex] = useState(0);

    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
      setAlertVisible(true);
    };
  
    const hideAlert = () => {
      setAlertVisible(false);
    };
  
    const renderSlides = ({ item }) => (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.slideImage} resizeMode='cover' />
       
        </View>
       
    );
  
    const renderPagination = () => (
      <View style={styles.paginationContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.paginationScrollView}
          showsHorizontalScrollIndicator={false}
        >
          {slides.map((slide, index) => (
            <View
              key={slide.key}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </ScrollView>
      </View>
    );

  return (
    <ScrollView style={styles.MainContainer}>
         <View  style={styles.Header} >
          <TouchableOpacity   onPress={()=>{navigation.goBack()}}  style={styles.Back_Cont} >
            <Image  source={Back_Icon} style={styles.Back_Icon}/>
            <Text style={styles.Back_Txt} >Request Details</Text>
          </TouchableOpacity>
         <View style={styles.Auth_Cont} >
           
          </View>
      
    
         
      </View>
        <AppIntroSlider
          
          renderItem={renderSlides}
          data={slides}
          onSlideChange={(index) => setCurrentIndex(index)}
          renderNextButton={() => null}
          renderDoneButton={() => null}
          renderPagination={() => null}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.paginationDotActive}
        />
         {renderPagination()}
   
       <View style={styles.Product_Detail} >
        <View style={styles.Type_Cont} >
        <Text style={styles.Type_Text} >Electronics</Text>
        </View>
        <View style={styles.Title_Rating} >
          <View style={styles.Title_Cont} >
          <Text style={styles.Title} >Headphones 7.1</Text>
          <Text style={styles.Brand} > - Stereo</Text>
          </View>
        
        </View>

        
        <View style={styles.Price_Cont} >
         <View  style={styles.Box1}>
        <Text style={styles.Product_Value} >You’ll Receive</Text>
        <Text style={styles.Product_Data} >CHF 3.60</Text>
        </View>
        <View  style={styles.Box1}>
        <Text style={styles.Product_Value} >Pickup at:</Text>
        <Text style={styles.Product_Data} >06/04/2024 at 1:00PM</Text>
        </View>
        <View  style={styles.Box1}>
        <Text style={styles.Product_Value} >Return at:</Text>
        <Text style={styles.Product_Data} >08/04/2024 at 1:00PM</Text>
        </View>
       
        
        </View>
         
         
         <View style={styles.OwnerDetail} >
            <View style={{flexDirection:'row',alignItems:"center"}} >
            <Image source={require('../../../Assets/Images/img1.png')} style={styles.OwnerImg} />
            <View  style={styles.User} >
            <Text style={styles.Owner_Text} >Owner :</Text>
            <Text style={styles.OwnerName} >Alex Hales</Text>
            </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('OwnerProfile')}} >
            <Text style={[styles.Owner_Text,{color:Colors.Green,marginRight:'4%'}]} >view Profile</Text>
            </TouchableOpacity>
         </View>

          <View style={styles.Button_Cont} >
            <View style={{width:'47%',}} >
          <TouchableOpacity style={styles.DeclineBtn}  onPress={()=>{navigation.goBack()}} >
            <Text  style={styles.Decline_Txt}>Decline</Text>
        </TouchableOpacity>
         </View>
         <View style={{width:'47%'}} >
         <TouchableOpacity style={styles.AcceptBtn}  onPress={showAlert} >
            <Text  style={styles.Accept_Txt}>Accept</Text>
        </TouchableOpacity>
         </View> 
         </View>
         
          
      </View>
 
      <AcceptAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('BobizzDetail')}}
      />
      

    </ScrollView>
  )
}

export default RequestDetail_1

const styles=StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor:Colors.Bg,
        marginBottom:'6%'
       
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
      marginRight:'5%'
      
    },
    Heart:{
      width:40,height:40,
      marginRight:'10%'
    },
     
      slideContainer: {
       backgroundColor:Colors.White,
       alignItems:'center',
       alignSelf:'center',
        width: '90%',
       elevation:4,
       borderRadius:10,
      },
      slideImage: {
        width: '100%',
        height: 250,
        
       
      },
      paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        marginLeft:'40%'
    
      },
      paginationScrollView: {
        paddingHorizontal: 16,
    
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: Colors.Grey9,
      },
      paginationDotActive: {
        backgroundColor: Colors.Green,
        width:30
      },
      Product_Detail:{
       paddingHorizontal:'4%'
      },
      Type_Cont:{
        backgroundColor:'#D0A700',
        width:80,
        alignItems:'center',
        padding:"1%",
        marginBottom:"3%",
        borderRadius:5,
      },
      Type_Text:{
        fontSize:12,
        lineHeight:14,
        color:Colors.White,
        fontFamily:Fonts.SF_Medium,
      },
      Title_Rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
      },
      Title_Cont:{
        flexDirection:"row",
        alignItems:'center'
      },
      Title:{
        fontSize:18,
        lineHeight:22,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
      },
      Brand:{
        fontSize:18,
        lineHeight:22,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
      },
      Rating_Cont:{
       flexDirection:'row',
       alignItems:"center"
      },
      Star_Icon:{
        width:15,height:15,  
      },
      Rating:{
        fontSize:14,
        lineHeight:18,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        paddingLeft:'2%'
      },
       Address_Cont:{
        flexDirection:'row',
        alignItems:"center",
        marginVertical:"2%"
       },
       Address_Img:{
        width:20,height:20,
        resizeMode:'contain',
        marginRight:"2%"
       },
      Address:{
        fontSize:14,
        lineHeight:16,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium, 
       },
       Price_Cont:{
        marginVertical:"3%",
        backgroundColor:Colors.White,
        padding:"3%",
        borderRadius:10,
       },
       Box1:{
         marginVertical:'2%'
       },
       Product_Value:{
        fontSize:14,
        lineHeight:18,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
       },
       Product_Data:{
        fontSize:14,
        lineHeight:18,
        color:Colors.Green,
        fontFamily:Fonts.SF_Medium,
        marginTop:"1%"
       },
       Progress_Condition_Cont:{
         justifyContent:'space-between',
         alignItems:'center',
         flexDirection:'row' 
         
       },
       Perfect:{
        fontSize:10,
         fontFamily:Fonts.SF_Medium,
         color:Colors.Green,
         lineHeight:12
       },
       Fair:{
        fontSize:10,
         fontFamily:Fonts.SF_Medium,
         color:Colors.Black,
         lineHeight:12
       },
       Terrible:{
        fontSize:10,
         fontFamily:Fonts.SF_Medium,
         color:Colors.Red,
         lineHeight:12
       },
       Desc:{
        fontSize:16,
        lineHeight:20,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        marginVertical:"3%"
       },
       Detail:{
        fontSize:13,
        lineHeight:17,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
        marginBottom:'3%'
       },

       QrCode_Cont:{
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:Colors.White,
        borderRadius:10,
       
        padding:'3%',
        marginBottom:'3%',
        justifyContent:"space-between"
       },
       Renter_Txt:{
         width:'55%',
         color:Colors.Black,
         fontSize:12,
         fontFamily:Fonts.SF_Regular
       },
       QR:{
          width:150,height:150
       },
       OwnerDetail:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.White,
        padding:'3%',
        borderRadius:8,
        borderWidth:0.2,
        marginVertical:"1%",
        justifyContent:"space-between"
       },
       OwnerImg:{
         width:60,height:60,
         marginRight:"4%"
       },
       Chatting:{
        width:60,height:60
       },
       User:{
        marginLeft:"3%"
       },
       Owner_Text:{
        fontSize:10,
        lineHeight:13,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
        marginBottom:'3%'
      },
      OwnerName:{
        fontSize:14,
        lineHeight:17,
        color:Colors.Black,
        fontFamily:Fonts.SF_Bold,
        marginBottom:'3%'
      },
      Button_Cont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:80
      },
      DeclineBtn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        borderWidth:1,
        borderColor:Colors.Green,
        width:'100%',
        padding:'10%',
        marginTop:'5%',
        borderRadius:10
      },
      AcceptBtn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:Colors.Green,
        width:'100%',
        padding:'10%',
        marginTop:'5%',
        borderRadius:10
      },
      Decline_Txt:{
        color:Colors.Green,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:19
      },
      Accept_Txt:{
        color:Colors.White,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:19
      },
      
      Scan:{
        width:25,height:25,
        marginRight:'3%',
        tintColor:Colors.White
      },
      Modify:{
        width:25,height:25,
        marginRight:'3%',
        tintColor:Colors.Green
      },
      Rent:{
        color:Colors.White,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:19
      },
      
       Cart:{
         backgroundColor:Colors.White,
         padding:10,
         borderRadius:20,
         elevation:1,
         width:300,
         margin:10
       },
       TopReviewCont:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:15,
        marginBottom:10
       },
       OwnerImg2:{
         width:45,height:45
       },
       Review_Text:{
        fontSize:11,
        lineHeight:15,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
       },
       Btn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#E31D1C',
        width:'100%',
        padding:'5%',
        marginVertical:'10%',
        borderRadius:10
      },
      Plus1:{
        width:12,height:14,
        
      },
      Rent:{
        color:Colors.White,
        fontSize:16,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:19,
        paddingHorizontal:'2%'
      },


   
      
})
import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Back_Icon, Chatting, Flag, Heart, Location, Modify, Plus1, Scan, Star } from '../../../Themes/Images';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';
import Rating from '../../../Components/Rating/Rating';


const slides = [
  {
    key: 'slide1',
   
    image: require('../../../Assets/Images/rectangle.png'), // Replace with your own image path
  },
  {
    key: 'slide2',
    image: require('../../../Assets/Images/rectangle.png'),  // Replace with your own image path
  },
  {
    key: 'slide3',
    image: require('../../../Assets/Images/rectangle.png'),  // Replace with your own image path
  },
];



const RentedItemDetails = ({navigation}) => {
    const route=useRoute();
    const Product=route.params.Data;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const renderSlides = ({ item }) => (
      <View style={styles.slideContainer}>
        <Image source={Product.Image1} style={styles.slideImage} resizeMode='cover' />
       
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
            <Text style={styles.Back_Txt} >Details</Text>
          </TouchableOpacity>
         <View style={styles.Auth_Cont} >
           <TouchableOpacity onPress={()=>{navigation.navigate('Report')}} style={styles.Auth_Icon} >
            <Image source={Flag} style={styles.Bell} />
           </TouchableOpacity>
           
           <TouchableOpacity onPress={()=>{navigation.navigate('WishlistItem')}} >
           <Image source={Heart} style={styles.Heart} />
           </TouchableOpacity>
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
        <Text style={styles.Type_Text} >{Product.Type}</Text>
        </View>
        <View style={styles.Title_Rating} >
          <View style={styles.Title_Cont} >
          <Text style={styles.Title} >{Product.Title}</Text>
         
          </View>
          <View style={styles.Rating_Cont} >
           <Image source={Star} style={styles.Star_Icon} />
          <Text style={styles.Rating} >{Product.Rating}</Text>
          </View>
        </View>

        <View style={styles.Address_Cont} >
        <Image source={Location} style={styles.Address_Img} />
          <Text style={styles.Address} >{Product. Location}</Text>
        </View>
        
        <View style={styles.Price_Cont} >
        <Text style={styles.Price} >You paid:</Text>
        <Text style={styles.Total} >{Product.Price}</Text>
     
        </View>
        <View style={styles.Desc_Cont} >
        <Text style={styles.Desc} >Description</Text>
        <Text style={styles.Detail} >{Product.Description}</Text>
        </View>
         
         <TouchableOpacity onPress={()=>{navigation.navigate('OwnerProfile')}} >
         <View style={styles.OwnerDetail} >
            <View style={{flexDirection:'row',alignItems:"center"}} >
            <Image source={Product.OwnerImage} style={styles.OwnerImg} />
            <View  style={styles.User} >
            <Text style={styles.Owner_Text} >Owner :</Text>
            <Text style={styles.OwnerName} >{Product.OwnerName}</Text>
            </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Chatting')}} >
                <Image source={Chatting} style={styles.Chatting} />
            </TouchableOpacity>
         </View>
         </TouchableOpacity>

        <TouchableOpacity style={styles.ScanBtn}  onPress={()=>{navigation.navigate('QrcodeScanner')}} >
            <Image source={Scan} style={styles.Scan} />
            <Text  style={styles.Rent}>Scan to Return</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ModifyBtn}  onPress={()=>{navigation.navigate('ModifyCancel')}} >
            <Image source={Modify} style={styles.Modify} />
            <Text  style={styles.Modify_Txt}>Modify/Cancel</Text>
        </TouchableOpacity>
          
      </View>
 
 
      

    </ScrollView>
  )
}

export default RentedItemDetails

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
        backgroundColor:'#8F033E',
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
       Price:{
        fontSize:14,
        lineHeight:18,
        color:Colors.Black,
        fontFamily:Fonts.SF_Regular,
       },
       Total:{
        fontSize:14,
        lineHeight:18,
        color:Colors.Green,
        fontFamily:Fonts.SF_Medium,
        marginTop:"1%"
       },
       Desc_Cont:{

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
      ScanBtn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:Colors.Green,
        width:'100%',
        padding:'4%',
        marginTop:'5%',
        borderRadius:10
      },
      ModifyBtn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        borderWidth:1,
        borderColor:Colors.Green,
        width:'100%',
        padding:'4%',
        marginTop:'5%',
        borderRadius:10
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
      Modify_Txt:{
        color:Colors.Green,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:19
      },
       Top_Review_Cont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       },
       Top:{
        fontSize:14,
        lineHeight:17,
        color:Colors.Black,
        fontWeight:'500',
        fontFamily:Fonts.SF_SemiBold,
       },
       View_Txt:{
        fontSize:12,
        lineHeight:15,
        color:Colors.Black,
        fontFamily:Fonts.SF_Medium,
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
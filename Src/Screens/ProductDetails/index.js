import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRoute } from '@react-navigation/native'
import { Colors } from '../../Themes/Colors';
import { Fonts } from '../../Themes/Fonts';
import { Back_Icon, Bell, Flag, Heart, Location, Plus1, Star } from '../../Themes/Images';
import Rating from '../../Components/Rating/Rating';
import spacerStyles from '../../Components/Spacers/style';


const slides = [
  {
    key: 'slide1',

    image: require('../../Assets/Images/rectangle.png'), // Replace with your own image path
  },
  {
    key: 'slide2',
    image: require('../../Assets/Images/rectangle.png'), // Replace with your own image path
  },
  {
    key: 'slide3',
    image: require('../../Assets/Images/rectangle.png'), // Replace with your own image path
  },
];



const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const Product = route.params.Data;
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
      {Platform.OS == "ios" ?
        <>
        <View style={spacerStyles.isDefault} />
          <View style={styles.Header} >
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.Back_Cont} >
              <Image source={Back_Icon} style={styles.Back_Icon} />
              <Text style={styles.Back_Txt} >Details</Text>
            </TouchableOpacity>
            <View style={styles.Auth_Cont} >
              <TouchableOpacity onPress={() => { navigation.navigate('Report') }} style={styles.Auth_Icon} >
                <Image source={Flag} style={styles.Bell} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('WishlistItem') }} >
                <Image source={Heart} style={styles.Heart} />
              </TouchableOpacity>
            </View>
          </View>
        </> :
        <View style={styles.Header} >
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.Back_Cont} >
            <Image source={Back_Icon} style={styles.Back_Icon} />
            <Text style={styles.Back_Txt} >Details</Text>
          </TouchableOpacity>
          <View style={styles.Auth_Cont} >
            <TouchableOpacity onPress={() => { navigation.navigate('Report') }} style={styles.Auth_Icon} >
              <Image source={Flag} style={styles.Bell} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('WishlistItem') }} >
              <Image source={Heart} style={styles.Heart} />
            </TouchableOpacity>
          </View>
        </View>
      }


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
            <Text style={styles.Brand} >{Product.Brand}</Text>
          </View>
          <View style={styles.Rating_Cont} >
            <Image source={Star} style={styles.Star_Icon} />
            <Text style={styles.Rating} >{Product.Rating}</Text>
          </View>
        </View>

        <View style={styles.Address_Cont} >
          <Image source={Location} style={styles.Address_Img} />
          <Text style={styles.Address} >{Product.Location}</Text>
        </View>

        <View style={styles.Price_Cont} >
          <Text style={styles.Price} >Price :</Text>
          <Text style={styles.Total} >{Product.Price}</Text>
        </View>
        <View style={styles.Desc_Cont} >
          <Text style={styles.Desc} >Description</Text>
          <Text style={styles.Detail} >{Product.Description}</Text>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('OwnerProfile') }} >
          <View style={styles.OwnerDetail} >
            <Image source={Product.OwnerImage} style={styles.OwnerImg} />
            <View style={styles.User} >
              <Text style={styles.Owner_Text} >Owner :</Text>
              <Text style={styles.OwnerName} >{Product.OwnerName}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('SelectDays') }} >
          <Image source={Plus1} style={styles.Plus1} />
          <Text style={styles.Rent}>Rent this Item</Text>
        </TouchableOpacity>
        <View style={styles.Top_Review_Cont} >
          <Text style={styles.Top} >Top Reviews</Text>
          <TouchableOpacity style={styles.ViewBtn} onPress={() => { navigation.navigate('Top_Reviews') }} >
            <Text style={styles.View_Txt} >View All</Text>
          </TouchableOpacity>

        </View>
      </View>


      <ScrollView horizontal    >
        <View style={styles.Cart} >
          <View style={styles.TopReviewCont} >
            <Image source={require('../../Assets/Images/img2.png')} style={styles.OwnerImg2} />
            <View style={styles.User} >
              <Text style={styles.OwnerName} >Max welicon</Text>
              <Rating />
            </View>
          </View>
          <Text style={styles.Review_Text} >The product was amazing. Had a nice experience with the owner, would love to recommend all of you!!!</Text>
        </View>
        <View style={styles.Cart} >
          <View style={styles.TopReviewCont} >
            <Image source={require('../../Assets/Images/img2.png')} style={styles.OwnerImg2} />
            <View style={styles.User} >
              <Text style={styles.OwnerName} >Max welicon</Text>
              <Rating />
            </View>
          </View>
          <Text style={styles.Review_Text} >The product was amazing. Had a nice experience with the owner, would love to recommend all of you!!!</Text>
        </View>
      </ScrollView>

    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.Bg,
    marginBottom: '6%'

  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '4%',
    backgroundColor: Colors.Bg,
  },
  Back_Cont: {
    flexDirection: 'row',
    alignItems: "center",

  },
  Back_Txt: {
    marginLeft: "8%",
    color: Colors.Green,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 24,
    fontSize: 20
  },
  Back_Icon: {
    width: 25, height: 25,
    marginLeft: "5%",
    tintColor: Colors.Green
  },
  Bobi: {
    width: 50, height: 50,
    resizeMode: 'contain'
  },
  Auth_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    left: '10%'
  },

  Bell: {
    width: 40, height: 40,
    marginRight: '5%'

  },
  Heart: {
    width: 40, height: 40,
    marginRight: '10%'
  },

  slideContainer: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 4,
    borderRadius: 10,
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
    marginLeft: '40%'

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
    width: 30
  },
  Product_Detail: {
    paddingHorizontal: '4%'
  },
  Type_Cont: {
    backgroundColor: '#D0A700',
    width: 90,
    alignItems: 'center',
    padding: "1%",
    marginBottom: "3%",
    borderRadius: 5,
  },
  Type_Text: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  Title_Rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  Title_Cont: {
    flexDirection: "row",
    alignItems: 'center'
  },
  Title: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
  },
  Brand: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
  },
  Rating_Cont: {
    flexDirection: 'row',
    alignItems: "center"
  },
  Star_Icon: {
    width: 16, height: 16,
  },
  Rating: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
    paddingLeft: '2%'
  },
  Address_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: "2%"
  },
  Address_Img: {
    width: 20, height: 20,
    resizeMode: 'contain',
    marginRight: "2%"
  },
  Address: {
    fontSize: 16,
    lineHeight: 18,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
  },
  Price_Cont: {
    marginVertical: "3%",
    backgroundColor: Colors.White,
    padding: "3%",
    borderRadius: 10,
  },
  Price: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
  },
  Total: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Green,
    fontFamily: Fonts.SF_Medium,
    marginTop: "1%"
  },
  Desc_Cont: {

  },
  Desc: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
    marginVertical: "3%"
  },
  Detail: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.Black,
    fontFamily: Fonts.SF_Regular,
    marginBottom: '3%'
  },
  OwnerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    padding: '3%',
    borderRadius: 8,
    borderWidth: 0.2,
    marginVertical: "1%",
  },
  OwnerImg: {
    width: 60, height: 60
  },
  User: {
    marginLeft: "3%"
  },
  Owner_Text: {
    fontSize: 12,
    lineHeight: 15,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
    marginBottom: '3%'
  },
  OwnerName: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.Black,
    fontFamily: Fonts.SF_Bold,
    marginBottom: '3%'
  },
  Btn: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.Green,
    width: '100%',
    padding: '4%',
    marginVertical: '5%',
    borderRadius: 10
  },
  Plus1: {
    width: 25, height: 25,
    marginRight: '3%'
  },
  Rent: {
    color: Colors.White,
    fontSize: 16,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 20
  },
  Top_Review_Cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Top: {
    fontSize: 16,
    lineHeight: 19,
    color: Colors.Black,
    fontWeight: '500',
    fontFamily: Fonts.SF_SemiBold,
  },
  View_Txt: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
  },
  Cart: {
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 20,
    elevation: 1,
    width: 300,
    margin: 10
  },
  TopReviewCont: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10
  },
  OwnerImg2: {
    width: 45, height: 45
  },
  Review_Text: {
    fontSize: 12,
    lineHeight: 15,
    color: Colors.Black,
    fontFamily: Fonts.SF_Regular,
  }



})
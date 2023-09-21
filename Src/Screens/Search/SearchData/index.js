import { View, Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React,{useState,useRef} from 'react'
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2'
import { Colors } from '../../../Themes/Colors'
import SearchItem from '../SearchItem/Index'
import { Anger, Loading, Swap } from '../../../Themes/Images'
import { Fonts } from '../../../Themes/Fonts'
import FilterRBSheet from '../../../Components/RBSheet/FilterRBSheet'

const SearchData = ({navigation}) => {
  const refRBSheet = useRef(null);
    const [SearchInput,setSearchInput]=useState('')

  return (
    <ScrollView contentContainerStyle={styles.MainCont} >
        <View  style={styles.TopHeader} >
        <CustomHeader2  onBackPress={()=>{navigation.goBack()}} />
        <View  style={styles.Input_Cont} >
        <TouchableOpacity>
        <Image source={require('../../../Assets/Icons/searchs.png')} style={styles.Search_Icon} />
        </TouchableOpacity>
        <TextInput placeholder='Search here'  placeholderTextColor={Colors.LightGreen} style={styles.Input} value={SearchInput}  onChangeText={(Txt)=>{setSearchInput(Txt)}}  />
        <TouchableOpacity  onPress={() => refRBSheet.current.open()}>
        <Image source={require('../../../Assets/Icons/filter.png')} style={styles.category_Icon} />
        </TouchableOpacity>
        </View>
        </View>
        
     {SearchInput==='' ?
       <View style={styles.ImgContainer} >
       <Image  source={Loading}  style={styles.Loading} />
       </View>:null
    }
    {SearchInput==='Headphone' ?
         <View style={styles.SearchItemCont}>
            <View style={styles.ResultCont} >
                <Text style={styles.FoundItem_Txt} >4 Found</Text>
                <View style={styles.DefaultCont} >
                <Text style={styles.Default_Txt} >Default</Text>
                <Image source={Swap} style={styles.Swap} />
                </View>
            </View>
            <SearchItem  navigation={navigation} />
         </View>
       :
        null
    }
     {SearchInput !== 'Headphone' && SearchInput !== '' ?
         <View style={styles.NoFound}>
          <Image source={Anger} style={styles.Anger} />
          <Text style={styles.Not_Found} >Not Found</Text>
          <Text style={styles.Sorry_Txt} >Sorry, the keyword you entered cannot be found, please check again or search with another keyword.</Text>
         </View>
       :
        null
    }

      

     <FilterRBSheet refRBSheet={refRBSheet} />
     
    </ScrollView>
  )
}

export default SearchData

const styles = StyleSheet.create({
    MainCont:{
    backgroundColor:Colors.Bg,
    padding:'3%'
    },
    TopHeader:{
     flexDirection:'row',
     alignItems:'center'
    },
    
Input_Cont:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:Colors.White,
    paddingVertical:'2%',
    paddingHorizontal:'4%',
    borderRadius:15,
    alignItems:'center',
    width:'85%',
    right:'3%',
    top:'10%'
  
  },
  Input:{
    width:'80%',
    color:Colors.Black,
    backgroundColor:Colors.White
  },
  
 
  Search_Icon:{
  width:20,height:20,
  marginRight:'2%'
  },
  category_Icon:{
    width:30,height:30
  },
  SearchItemCont:{
    marginTop:'4%',
  },
  ImgContainer:{
      marginTop:'30%',
      alignItems:'center',
      height:700
  },
  Loading:{
      width:50,height:50
  },
  NoFound:{
      alignItems:'center',
      height:600,
      justifyContent:'center',
      alignItems:'center'
   
  },
  ResultCont:{
    flexDirection:'row',
    paddingVertical:'3%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  FoundItem_Txt:{
    fontSize:16,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Black,
    lineHeight:20
  },
  Default_Txt:{
    fontSize:16,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Green,
    lineHeight:20,
    marginRight:'5%'
  },
  DefaultCont:{
    flexDirection:'row',
    alignItems:'center'
  },
  Swap:{
    width:20,height:20,
  },
  Anger:{
    width:150,height:150,
    marginBottom:'5%'
  },
  Not_Found:{
    fontSize:24,
    fontFamily:Fonts.SF_Black,
    color:Colors.Black,
    lineHeight:30,
     marginVertical:"5%"
  },

   Sorry_Txt:{
       width:'94%',
       fontSize:18,
       fontFamily:Fonts.SF_Regular,
       color:Colors.Black,
       lineHeight:22,
       textAlign:"center"
    
   }
})
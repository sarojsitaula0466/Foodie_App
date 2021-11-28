import { useNavigation } from "@react-navigation/core";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import MenuData from '../assets/data/MenuData';



Feather.loadFont();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerHome}>
            Home
          </Text>
          <Text style={styles.headerAddress}>
          Ratatie 22, 01300 Vantaa
          </Text>
          <Image source={require('../assets/images/logo.png')}
          style={styles.logo}
          />
          
         
        </View>
      </SafeAreaView>

      {/*Search*/}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={18}/>
      <View style={styles.search}>
      <Text style={styles.searchText}> Search food you want</Text>
      </View>
      </View>

      {/*Title*/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Crowd favorites..</Text>
      </View>

      {/*Menu*/}
      <View style={styles.menuWrapper}>
        {MenuData.map(item => (
          <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate('Ordering', {
              item: item,
            })
          }>
          <View style={styles.menuItem}>
            <View>
            <Image source={item.image} style={styles.menuImage}/>
            </View>
            <View style={styles.menuText}> 
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuPrice}>{item.price} €</Text>
            
            </View>


          </View>
          
        


          </TouchableOpacity>
        ))}
        <View>
        </View>
      </View>


      </ScrollView>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headerWrapper:{
    paddingTop:10,
    paddingLeft:5,
  },
  headerHome:{

    position:"absolute",
    left:124,
    height:26,
    width:84,
    top:'40%',
    fontWeight:"bold",
    fontSize:17,

  },
    headerAddress:{

      position:"absolute",
      left:124,
      top:'65%',
      color:'#A0A0A0',
  
  
    },

  logo :{
    width: 113,
    height: 90,
  },
  titleWrapper: {
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10,
    left:10,

    
  },
  titleText: {
    fontWeight:"bold",
    fontSize:24,
    lineHeight:36,
    left:5,

    

  },
  searchWrapper:{
    flexDirection: "row",
    alignItems:"center",
    backgroundColor:"#E0E0E0",
    borderRadius:14,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:30,
    width:317,
    height:39,
    left:18,
    


  },
  search: {
    

  },
  searchText:{
    fontSize:17,

  },
  menuWrapper: {
    backgroundColor: "#FFF6DC",
    borderRadius:20,

  },
  menuItem: {
    flexDirection:"row",
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 10,
    left:15,

  },
  menuText: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,


  },
  menuTitle: {
    fontWeight:"bold",
    fontSize:18,
  },

  menuPrice: {
    fontSize:24,
    paddingTop:10,
    fontWeight:"bold",

  },
  menuImage :{
    width: 135,
    height: 102,
    paddingRight:60,
    borderRadius:17,
  },
});